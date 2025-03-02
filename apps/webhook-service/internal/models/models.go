package models

type UpdateTxnModel struct {
	Type string `json:"type"`
	Token string `json:"token"`
	Status string `json:"status"`
	Amount string `json:"amount"`
}
