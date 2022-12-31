package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Investment holds the schema definition for the Investment entity.
type Investment struct {
	ent.Schema
}

// Fields of the Investment.
func (Investment) Fields() []ent.Field {
	return []ent.Field{
		field.Int("id").
			StructTag(`json:"oid,omitempty"`),
		field.Int64("user_id"),
		field.Text("name"),
		field.Text("relation"),
		field.Time("date"),
		field.Int64("amount"),
		field.Text("payment_method").Nillable(),
		field.Text("remarks").Nillable(),
		field.Time("created_at").
			Default(time.Now).
			Immutable(),
		field.Time("updated_at").
			Default(time.Now),
	}
}

// Edges of the Investment.
func (Investment) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("investment_id", Portfolio.Type).Ref(("investments")).Unique(),
	}
}
