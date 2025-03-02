package utils

import (
	"context"
	"webhook-service/internal/db"
	"webhook-service/internal/models"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"
)

func HandleTransaction(ctx context.Context, DbPool *pgxpool.Pool, queries *db.Queries, payload models.UpdateTxnModel, userId int32) error {
	tx, err := DbPool.Begin(ctx)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	
	var amount pgtype.Numeric

	err = amount.Scan(payload.Amount)
	if err != nil {
		return err
	}

	qtx := queries.WithTx(tx)

	// add balance to wallet
	_, err = qtx.AddToWallet(ctx, db.AddToWalletParams{
		Balance: amount,
		UserID: userId,
	})
	if err != nil {
		return err
	}

	// update txn status
	_, err = qtx.UpdateTransaction(ctx, db.UpdateTransactionParams{
		Status: db.TransactionStatus(payload.Status),
		Token: payload.Token,
	})
	if err != nil {
		return err
	}

	return tx.Commit(ctx)
}