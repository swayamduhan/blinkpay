package redis

import (
    "context"
    "fmt"

    "github.com/redis/go-redis/v9"
)

func InitRedisClient() *redis.Client {
    RedisClient := redis.NewClient(&redis.Options{
        Addr:     "localhost:6379",
        Password: "", // no password set
        DB:       0,  // use default DB
    })

	test(RedisClient)
	return RedisClient
}

func test(RedisClient *redis.Client){
	ctx := context.Background()

	err := RedisClient.Set(ctx, "foo", "bar", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := RedisClient.Get(ctx, "foo").Result()
	if err != nil {
		panic(err)
	}

	status := "failed"
	if val == "bar" {
		status = "success"
	}

	fmt.Printf("Redis connection: %v\n", status)
}