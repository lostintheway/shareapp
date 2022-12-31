package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// User holds the schema definition for the User entity.
type User struct {
	ent.Schema
}

// Fields of the User.
func (User) Fields() []ent.Field {
	return []ent.Field{
		field.Int("id").
			StructTag(`json:"oid,omitempty"`),
		field.Text("firstName"),
		field.Text("middleName").Nillable(),
		field.Text("lastName"),
		field.Text("email"),
		field.Text("username"),
		field.Text("phone").Nillable(),
		field.Text("password").Nillable(),
		field.Text("user_type").Nillable(),
		field.Text("google_id").Nillable(),
		field.Time("created_at").
			Default(time.Now).
			Immutable(),
		field.Time("updated_at").
			Default(time.Now),
	}
}

// Edges of the User.
func (User) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("portfolios", Portfolio.Type),
	}
}

// Indexes

// func (User) Indexes() []ent.Index {
// 	return []ent.Index{
// 		index.Fields("username").
// 			Unique(),
// 	}
// }
