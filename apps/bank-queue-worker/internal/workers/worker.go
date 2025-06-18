package workers

import (
	"bank-queue-worker/internal/server"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"time"

	"github.com/redis/go-redis/v9"
)

type UpdateTxnModel struct {
	Type string `json:"type"`
	Token string `json:"token"`
	Status string `json:"status"`
	Amount int32 `json:"amount"`
}


// function:
// brpop from redis queue and then push to webhook server
// if fails, put back in queue
// TODO: figure out a retry logic, cant keep retrying endlessly, need to return FAILED at one point

func StartWorker(client *redis.Client){
	fmt.Println("worker started")
	ctx := context.Background()
	for {
		msg, err := client.BRPop(ctx, 0, "webhook").Result()
		if err != nil {
			log.Printf("error popping message from queue: %v\n", err)
			continue
		}

		// success := processTask(msg)


		success := processTask(ctx, msg[1], client)
		if !success {
			fmt.Println("error processing task, handled it!")
			continue
		}
		// if not success, push back to queue, handle retry logic using time properly now
	}
}

func processTask(ctx context.Context, txnString string, client *redis.Client) bool {
	// do a request to bank webhook to add
	// if error return false and handle retry
	var txn server.Transaction
	err := json.Unmarshal([]byte(txnString), &txn)
	if err != nil {
		log.Printf("error unmarshalling json string from queue: %v\n", err)
		return false
	}

	err = sendRequestToWebhook(txn)
	if err != nil {
		// push back to queue
		fmt.Println("error sending request, pushing back to queue")
		time.Sleep(2*time.Second) // fake delay to mock
		client.LPush(ctx,"webhook", txnString)
	}

	return true
}



func sendRequestToWebhook(txn server.Transaction) error {
	status := "FAILED"
	if txn.Success {
		status = "SUCCESS"
	}
	txnStruct := UpdateTxnModel{
		Type: txn.Type,
		Token: txn.Token,
		Status: status,
		Amount: txn.Amount,
	}

	jsonData, err := json.Marshal(txnStruct)
	if err != nil {
		fmt.Println("error while marshalling json: ", err)
		return err
	}

	resp, err := http.Post("http://localhost:8080/update-status", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error:", err)
		return err
	}

	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println(string(body))
	return nil
}