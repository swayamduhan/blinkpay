-- name: GetTransactionByToken :one
SELECT * FROM bank_transactions
WHERE token=$1;

-- name: UpdateTransaction :one
UPDATE bank_transactions
SET status = $1
WHERE token = $2 AND status = 'PROCESSING'
RETURNING *;

-- name: AddToWallet :one
UPDATE wallets 
SET balance = balance + $1
WHERE user_id = $2
RETURNING *;

