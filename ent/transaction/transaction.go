// Code generated by ent, DO NOT EDIT.

package transaction

import (
	"time"
)

const (
	// Label holds the string label denoting the transaction type in the database.
	Label = "transaction"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldShareName holds the string denoting the sharename field in the database.
	FieldShareName = "share_name"
	// FieldDate holds the string denoting the date field in the database.
	FieldDate = "date"
	// FieldQuantity holds the string denoting the quantity field in the database.
	FieldQuantity = "quantity"
	// FieldPrice holds the string denoting the price field in the database.
	FieldPrice = "price"
	// FieldTransType holds the string denoting the trans_type field in the database.
	FieldTransType = "trans_type"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// EdgePfID holds the string denoting the pf_id edge name in mutations.
	EdgePfID = "pf_id"
	// Table holds the table name of the transaction in the database.
	Table = "transactions"
	// PfIDTable is the table that holds the pf_id relation/edge.
	PfIDTable = "transactions"
	// PfIDInverseTable is the table name for the Portfolio entity.
	// It exists in this package in order to avoid circular dependency with the "portfolio" package.
	PfIDInverseTable = "portfolios"
	// PfIDColumn is the table column denoting the pf_id relation/edge.
	PfIDColumn = "portfolio_transactions"
)

// Columns holds all SQL columns for transaction fields.
var Columns = []string{
	FieldID,
	FieldShareName,
	FieldDate,
	FieldQuantity,
	FieldPrice,
	FieldTransType,
	FieldCreatedAt,
	FieldUpdatedAt,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "transactions"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"portfolio_transactions",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultUpdatedAt holds the default value on creation for the "updated_at" field.
	DefaultUpdatedAt func() time.Time
)
