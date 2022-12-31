// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/ent/investment"
	"github.com/lostintheway/shareapp/tree/shareapp_go_ent/ent/portfolio"
)

// Investment is the model entity for the Investment schema.
type Investment struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"oid,omitempty"`
	// UserID holds the value of the "user_id" field.
	UserID int64 `json:"user_id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Relation holds the value of the "relation" field.
	Relation string `json:"relation,omitempty"`
	// Date holds the value of the "date" field.
	Date time.Time `json:"date,omitempty"`
	// Amount holds the value of the "amount" field.
	Amount int64 `json:"amount,omitempty"`
	// PaymentMethod holds the value of the "payment_method" field.
	PaymentMethod *string `json:"payment_method,omitempty"`
	// Remarks holds the value of the "remarks" field.
	Remarks *string `json:"remarks,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// UpdatedAt holds the value of the "updated_at" field.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the InvestmentQuery when eager-loading is set.
	Edges                 InvestmentEdges `json:"edges"`
	portfolio_investments *int
}

// InvestmentEdges holds the relations/edges for other nodes in the graph.
type InvestmentEdges struct {
	// InvestmentID holds the value of the investment_id edge.
	InvestmentID *Portfolio `json:"investment_id,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// InvestmentIDOrErr returns the InvestmentID value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e InvestmentEdges) InvestmentIDOrErr() (*Portfolio, error) {
	if e.loadedTypes[0] {
		if e.InvestmentID == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: portfolio.Label}
		}
		return e.InvestmentID, nil
	}
	return nil, &NotLoadedError{edge: "investment_id"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Investment) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case investment.FieldID, investment.FieldUserID, investment.FieldAmount:
			values[i] = new(sql.NullInt64)
		case investment.FieldName, investment.FieldRelation, investment.FieldPaymentMethod, investment.FieldRemarks:
			values[i] = new(sql.NullString)
		case investment.FieldDate, investment.FieldCreatedAt, investment.FieldUpdatedAt:
			values[i] = new(sql.NullTime)
		case investment.ForeignKeys[0]: // portfolio_investments
			values[i] = new(sql.NullInt64)
		default:
			return nil, fmt.Errorf("unexpected column %q for type Investment", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Investment fields.
func (i *Investment) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for j := range columns {
		switch columns[j] {
		case investment.FieldID:
			value, ok := values[j].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			i.ID = int(value.Int64)
		case investment.FieldUserID:
			if value, ok := values[j].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field user_id", values[j])
			} else if value.Valid {
				i.UserID = value.Int64
			}
		case investment.FieldName:
			if value, ok := values[j].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[j])
			} else if value.Valid {
				i.Name = value.String
			}
		case investment.FieldRelation:
			if value, ok := values[j].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field relation", values[j])
			} else if value.Valid {
				i.Relation = value.String
			}
		case investment.FieldDate:
			if value, ok := values[j].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field date", values[j])
			} else if value.Valid {
				i.Date = value.Time
			}
		case investment.FieldAmount:
			if value, ok := values[j].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field amount", values[j])
			} else if value.Valid {
				i.Amount = value.Int64
			}
		case investment.FieldPaymentMethod:
			if value, ok := values[j].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field payment_method", values[j])
			} else if value.Valid {
				i.PaymentMethod = new(string)
				*i.PaymentMethod = value.String
			}
		case investment.FieldRemarks:
			if value, ok := values[j].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field remarks", values[j])
			} else if value.Valid {
				i.Remarks = new(string)
				*i.Remarks = value.String
			}
		case investment.FieldCreatedAt:
			if value, ok := values[j].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[j])
			} else if value.Valid {
				i.CreatedAt = value.Time
			}
		case investment.FieldUpdatedAt:
			if value, ok := values[j].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field updated_at", values[j])
			} else if value.Valid {
				i.UpdatedAt = value.Time
			}
		case investment.ForeignKeys[0]:
			if value, ok := values[j].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field portfolio_investments", value)
			} else if value.Valid {
				i.portfolio_investments = new(int)
				*i.portfolio_investments = int(value.Int64)
			}
		}
	}
	return nil
}

// QueryInvestmentID queries the "investment_id" edge of the Investment entity.
func (i *Investment) QueryInvestmentID() *PortfolioQuery {
	return (&InvestmentClient{config: i.config}).QueryInvestmentID(i)
}

// Update returns a builder for updating this Investment.
// Note that you need to call Investment.Unwrap() before calling this method if this Investment
// was returned from a transaction, and the transaction was committed or rolled back.
func (i *Investment) Update() *InvestmentUpdateOne {
	return (&InvestmentClient{config: i.config}).UpdateOne(i)
}

// Unwrap unwraps the Investment entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (i *Investment) Unwrap() *Investment {
	_tx, ok := i.config.driver.(*txDriver)
	if !ok {
		panic("ent: Investment is not a transactional entity")
	}
	i.config.driver = _tx.drv
	return i
}

// String implements the fmt.Stringer.
func (i *Investment) String() string {
	var builder strings.Builder
	builder.WriteString("Investment(")
	builder.WriteString(fmt.Sprintf("id=%v, ", i.ID))
	builder.WriteString("user_id=")
	builder.WriteString(fmt.Sprintf("%v", i.UserID))
	builder.WriteString(", ")
	builder.WriteString("name=")
	builder.WriteString(i.Name)
	builder.WriteString(", ")
	builder.WriteString("relation=")
	builder.WriteString(i.Relation)
	builder.WriteString(", ")
	builder.WriteString("date=")
	builder.WriteString(i.Date.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("amount=")
	builder.WriteString(fmt.Sprintf("%v", i.Amount))
	builder.WriteString(", ")
	if v := i.PaymentMethod; v != nil {
		builder.WriteString("payment_method=")
		builder.WriteString(*v)
	}
	builder.WriteString(", ")
	if v := i.Remarks; v != nil {
		builder.WriteString("remarks=")
		builder.WriteString(*v)
	}
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(i.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("updated_at=")
	builder.WriteString(i.UpdatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// Investments is a parsable slice of Investment.
type Investments []*Investment

func (i Investments) config(cfg config) {
	for _i := range i {
		i[_i].config = cfg
	}
}
