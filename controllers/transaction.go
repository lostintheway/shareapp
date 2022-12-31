package controllers

// import (
// 	"fmt"
// 	"log"

// 	"github.com/gofiber/fiber/v2"
// 	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/entconfig"
// )

// func POSTtransaction(ctx *fiber.Ctx) error {

// 	body := struct {
// 		SetShareName string `json:"setShareName"`
// 		SetDate      string `json:"setDate"`
// 		SetQuantity  string `json:"setQuantity"`
// 		SetPrice     int    `json:"setPrice"`
// 		SetTransType int    `json:"setTransType"`
// 		Sort         int    `json:"sort"`
// 		Sort         int    `json:"sort"`
// 		Sort         int    `json:"sort"`
// 	}{}

// 	if err := ctx.BodyParser(&body); err != nil {
// 		return err
// 	}

// 	category, err := entconfig.Client.Transaction.
// 		Create().
// 		SetShareName(body.ShareName).
// 		SetDate(body.Description).
// 		SetQuantity(body.Status).
// 		SetPrice(int8(body.Sort)).
// 		SetTransType(int8(body.Sort)).
// 		SETuser(int8(body.Sort)).
// 		SetPrice(int8(body.Sort)).
// 		Save(ctx.Context())
// 	if err != nil {
// 		return fmt.Errorf("failed creating category: %w", err)
// 	}
// 	log.Println("category created: ", category)
// 	return ctx.Status(200).JSON(category)
// }

// func GETALLCategorys(ctx *fiber.Ctx) error {
// 	categorys, err := entconfig.Client.Category.Query().All(ctx.Context())
// 	if err != nil {
// 		return fiber.NewError(500, err.Error())
// 	}
// 	log.Println("returned battles:", categorys)

// 	return ctx.Status(200).JSON(categorys)
// }
