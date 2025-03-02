package controllers

import (
	"fmt"
	"net/http"
	"webhook-service/internal/models"

	"github.com/labstack/echo/v4"
)

func Hello(c echo.Context) error {
	return c.JSON(http.StatusOK, "Hello from webhook service!")
}

func UpdateTransactionController(c echo.Context) error {
	// ctx := c.Request().Context()

	var payload *models.UpdateTxnModel

	if err := c.Bind(&payload); err != nil {
		return c.JSON(http.StatusBadRequest, "incorrect json")
	}

	fmt.Println(payload)

	return c.JSON(http.StatusOK, "this is to update txn status")
}