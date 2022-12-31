package entconfig

import (
	"context"
	"log"

	"entgo.io/ent/dialect"
	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/ent"
)

var Client *ent.Client

func EntConfig() {
	mainCtx := context.Background()
	clentt, err := ent.Open(dialect.MySQL, "sawmill:#1914SawMillion@tcp(150.230.237.97:3306)/deals_test_db?charset=utf8")
	if err != nil {
		log.Fatal(err)
	}

	if err := clentt.Schema.Create(mainCtx); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
	Client = clentt
}
