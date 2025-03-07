package server

import (
	pb "bank-queue-worker/proto"
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net"

	"github.com/redis/go-redis/v9"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

type Transaction struct {
	Token string `json:"token"`
	Success bool `json:"success"`
}

type server struct {
	pb.UnimplementedTransactionServiceServer
	redisClient *redis.Client
}

func (s *server) AddTxnToQueue(ctx context.Context, in *pb.AddTransactionRequest) (*pb.AddTransactionResponse, error) {
	if in.GetToken() == "" {
		return nil, status.Errorf(codes.InvalidArgument, "Token is required")
	}


	txn := Transaction{
		Token: in.GetToken(),
		Success: in.GetSuccess(),
	}

	jsonString, err := json.Marshal(txn)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to serialise transaction: %v", err)
	}

	err = s.redisClient.LPush(ctx, "webhook", jsonString).Err()
	if err != nil {
		return nil, status.Errorf(codes.Internal, "error pushing txn to queue: %v", err)
	}

	log.Printf("transaction added: %s", string(jsonString))
	
	return &pb.AddTransactionResponse{Response: "Transaction added!"}, nil
}

func InitGrpcServer(client *redis.Client) {
	flag.Parse()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterTransactionServiceServer(s, &server{redisClient: client})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}