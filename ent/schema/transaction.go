package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Transaction holds the schema definition for the Transaction entity.
type Transaction struct {
	ent.Schema
}

// Fields of the Transaction.
func (Transaction) Fields() []ent.Field {
	return []ent.Field{
		field.Int("id").
			StructTag(`json:"oid,omitempty"`),
		field.Text("shareName"),
		field.Time("date"),
		field.Int("quantity"),
		field.Int("price"),
		field.Int("user_id"),
		field.Text("trans_type"),
		field.Time("created_at").
			Default(time.Now).
			Immutable(),
		field.Time("updated_at").
			Default(time.Now),
	}
}

// Edges of the Transaction.
func (Transaction) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("pf_id", Portfolio.Type).
			Ref("transactions").
			Unique(),
	}
}
