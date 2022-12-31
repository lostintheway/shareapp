package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/encryptcookie"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/entconfig"

	// "github.com/lostinthwway/deals/tree/deals_fiber_v2/entconfig"
	// "github.com/lostinthwway/deals/tree/deals_fiber_v2/myfirebase"
	// "github.com/lostinthwway/deals/tree/deals_fiber_v2/routes"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	entconfig.EntConfig()
	// my firbase
	// app.Use(func(ctx *fiber.Ctx) error {
	// 	return myfirebase.FirebaseMiddleware(ctx)
	// })

	// myrrredis := redis.NewClient(&redis.Options{
	// 	Addr: "localhost:6379",
	// 	DB:   0, // use default DB
	// })

	app.Use(limiter.New(limiter.Config{
		Max:        50,
		Expiration: 120 * time.Second,
	}))

	app.Use(cors.New())

	app.Use(logger.New())

	// Default middleware config
	app.Use(encryptcookie.New(encryptcookie.Config{
		Key: "secrethsakdhasdkjlahs",
	}))

	app.Get("/test", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World! You are at the root endpoint 😉")
	})
	// routes.AllROutes(app)

	log.Fatal(app.Listen(fmt.Sprintf(":%s", os.Getenv("APP_PORT"))))
}
