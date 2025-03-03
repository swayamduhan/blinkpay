package tests

import (
	"fmt"
	"log"

	"github.com/jackc/pgx/v5/pgtype"
)

func testNumeric(amountToBeConverted string) {
	var amount pgtype.Numeric
	if err := amount.Scan(amountToBeConverted); err != nil {
		log.Fatal("Error conversion")
	}

	fmt.Println(amount)
}

func RunNumericTest(){
	fmt.Println("------------------------------")
	testNumeric("0.5")
	testNumeric("50.66")
	testNumeric("902.8")
}