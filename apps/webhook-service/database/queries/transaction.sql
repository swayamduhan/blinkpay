-- name: UpdateTransaction :one
UPDATE bank_transactions
SET status=$1
WHERE token=$2
RETURNING *;

-- name: GetTransactionByToken :one
SELECT * FROM bank_transactions
WHERE token=$1;

