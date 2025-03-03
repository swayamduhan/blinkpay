# Webhook service for BlinkPay made in Golang
gets updates from bank regarding transaction status and updates in SQL database

## Tech Stack
- SQLC
- Echo

## Todo:
- add a SSE server to send real time updates to client regarding their payment
- test if the pgtype.Numeric conversion is working correctly