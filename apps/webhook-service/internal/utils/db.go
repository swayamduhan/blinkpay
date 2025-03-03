package utils

import (
	"context"
	"fmt"
	"log"
	"os"
	"webhook-service/internal/db"

	"github.com/jackc/pgx/v5/pgxpool"
)

var Queries *db.Queries

var DbPool *pgxpool.Pool

func InitDB() {
	ctx := context.Background()

	DbPool, err := pgxpool.New(ctx, os.Getenv("DATABASE_URL"))
	if err != nil {
		fmt.Println("unable to create connection pool")
		panic(err)
	}

	Queries = db.New(DbPool)
	Ping(DbPool)
}

func Ping(dbpool *pgxpool.Pool){
	if dbpool == nil {
		log.Fatal("db connection not available")
		return
	}

	ctx := context.Background()
	err := dbpool.Ping(ctx)
	if err != nil {
		log.Fatal("error pinging db")
		return
	}

	fmt.Println("DB ping successful :)")
}