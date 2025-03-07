package workers

import (
	"bank-queue-worker/internal/server"
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/redis/go-redis/v9"
)

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
		var txn server.Transaction
		err = json.Unmarshal([]byte(msg[1]), &txn)
		if err != nil {
			log.Printf("error unmarshalling json string from queue: %v\n", err)
			continue
		}

		success := processTask(txn)
		fmt.Println(success)
		// if not success, push back to queue
	}
}

func processTask(txn server.Transaction) bool {
	// do a request to bank webhook to add
	// if error return false and handle retry
	fmt.Println("task done")
	return true
}