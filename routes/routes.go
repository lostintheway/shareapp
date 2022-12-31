package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/controllers"
)

func AllROutes(app *fiber.App) {

	admin := app.Group("/api") // /api
	// public := app.Group("/api") // /api

	// v1 := api.Group("/v1", middleware)   // /api/v1
	// v1.Get("/list", handler)             // /api/v1/list
	// v1.Get("/user", handler)             // /api/v1/user

	// v2 := api.Group("/v2", middleware)   // /api/v2
	// v2.Get("/list", handler)             // /api/v2/list
	// v2.Get("/user", handler)             // /api/v2/user

	// log.Fatal(app.Listen(":3000"))
	// admin := app.Group("/admin")
	// // adminAuthenticated := route
	// adminAuthenticated := admin.Use(auth.IsAuthenticated)

	// // Transaction Routes
	admin.Post("/transaction", controllers.POSTtransaction)
	admin.Get("/transaction", controllers.GETAllTransactions)

	// adminAuthenticated.Get("/category/all", controllers.GETALLCategory)
	// adminAuthenticated.Patch("/category/status/:id", controllers.CategoryStatusChange)
	// adminAuthenticated.Post("/category", controllers.AddCategory)
	// adminAuthenticated.Put("/category/:id", controllers.UpdateCategory)
	// route.Get("/category", controllers.GETactiveCategorys)

	// Product Routes
	// admin.Get("/product", controllers.GETALLProducts)
	// adminAuthenticated.Get("/products/all", controllers.GETALLProducts)
	// adminAuthenticated.Put("/product/:id", controllers.UpdateProduct)
	// route.Get("/product/:id", controllers.GETproductById)

	// // S3upload Routes
	// adminAuthenticated.Post("/upload", s3upload.UploadFileToS3)

	// User Routes
	// public.Post("/user/signin", controllers.Signin)
	// public.Post("/user/signup", controllers.Signup)
}
