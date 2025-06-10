package models

type UpdateTxnModel struct {
	Type string `json:"type"`
	Token string `json:"token"`
	Status string `json:"status"`
	Amount int32 `json:"amount"`
}
