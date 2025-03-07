package cmd

import (
	"bank-queue-worker/internal/redis"
	"bank-queue-worker/internal/workers"
	"bank-queue-worker/internal/server"
)

func Start() {
	client := redis.InitRedisClient()
	go workers.StartWorker(client)
	go workers.StartWorker(client)
	go workers.StartWorker(client)

	// started 3 workers listening to "webhook" queue on redis

	server.InitGrpcServer(client)
}