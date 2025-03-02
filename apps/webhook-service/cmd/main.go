package main

import (
	"fmt"
	"log"
	"os"
	"webhook-service/internal/controllers"
	"webhook-service/internal/utils"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading env")
	}

	port := os.Getenv("PORT")

	utils.InitDB()

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("", controllers.Hello)
	e.POST("/update-status", controllers.UpdateTransactionController)

	fmt.Println("--- Starting webhook service ---")
	e.Logger.Fatal(e.Start(":" + port))
}