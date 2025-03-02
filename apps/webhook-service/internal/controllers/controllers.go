package controllers

import (
	"net/http"
	"webhook-service/internal/db"
	"webhook-service/internal/models"
	"webhook-service/internal/utils"

	"github.com/labstack/echo/v4"
)

func Hello(c echo.Context) error {
	return c.JSON(http.StatusOK, "Hello from webhook service!")
}

// when transaction fails, the bank should put it in the queue and keep retrying 

func UpdateTransactionController(c echo.Context) error {
	ctx := c.Request().Context()

	var payload *models.UpdateTxnModel

	if err := c.Bind(&payload); err != nil {
		return c.JSON(http.StatusBadRequest, "incorrect json")
	}

	if payload.Status != "SUCCESS" && payload.Status != "FAILED" {
		return c.JSON(http.StatusBadRequest, "invalid type specified, should be either SUCCESS or FAILED")
	}

	txnToBeUpdated, err := utils.Queries.GetTransactionByToken(ctx, payload.Token)
	if err != nil {
		return c.JSON(http.StatusNotFound, "no transaction found for token")
	}

	if (payload.Status == "FAILED" && payload.Type == "TOPUP") || (payload.Status == "SUCCESS" && payload.Type == "WITHDRAWAL") {
		// failed topup or success withdrawal -> update txn
		_, err := utils.Queries.UpdateTransaction(ctx, db.UpdateTransactionParams{
			Status: db.TransactionStatus(payload.Status),
			Token: payload.Token,
		})

		if err != nil {
			return c.JSON(http.StatusInternalServerError, "error updating txn")
		}

		return c.JSON(http.StatusOK, "updating txn")
	}

	if (payload.Status == "SUCCESS" && payload.Type == "TOPUP") || (payload.Status == "FAILED" && payload.Type == "WITHDRAWAL") {
		// add to balance and update txn
		// handling failed withdrawals and successful topups
		// need to add money to wallet in both cases
		if err := utils.HandleTransaction(ctx, utils.DbPool, utils.Queries, *payload, txnToBeUpdated.UserID); err != nil {
			return c.JSON(http.StatusInternalServerError, "error updating balance and status")
		}

		return c.JSON(http.StatusOK, "updating balance and status")
	}

	return c.JSON(http.StatusOK, "update txn handler")
}
