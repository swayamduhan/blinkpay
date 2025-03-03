# Queue-Worker server
in Golang where bank pushes requests to the redis queue and then workers pick them up and send over to webhook-service

## Stack
gRPC - HTTP/2 for requests from bank
Redis Queues

## Authors
Swayam Duhan <3