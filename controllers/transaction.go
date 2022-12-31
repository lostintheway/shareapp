package controllers

import (
	"fmt"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/entconfig"
)

func POSTtransaction(ctx *fiber.Ctx) error {

	body := new(struct {
		ShareName string `json:"shareName"`
		Date      string `json:"date"`
		Quantity  int    `json:"quantity"`
		Price     int    `json:"price"`
		TransType string `json:"transType"`
		UserId    int    `json:"userId"`
		PfId      int    `json:"pfId"`
	})

	if err := ctx.BodyParser(&body); err != nil {
		return err
	}

	mydate, err := time.Parse("2006-01-02", body.Date)
	if err != nil {
		log.Fatal(err)
	}
	transaction, err := entconfig.Client.Transaction.
		Create().
		SetShareName(body.ShareName).
		SetDate(mydate).
		SetQuantity((body.Quantity)).
		SetPrice((body.Price)).
		SetTransType((body.TransType)).
		SetUserID((body.UserId)).
		SetPfIDID((body.PfId)).
		Save(ctx.Context())
	if err != nil {
		return fmt.Errorf("error post transaction: %w", err)
	}
	log.Println("transactions created: ", transaction)
	return ctx.Status(200).JSON(transaction)
}

func GETAllTransactions(ctx *fiber.Ctx) error {
	transactions, err := entconfig.Client.Transaction.Query().All(ctx.Context())
	if err != nil {
		return fiber.NewError(500, err.Error())
	}
	log.Println("returned battles:", transactions)

	return ctx.Status(200).JSON(transactions)
}
