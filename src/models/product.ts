// export const productModel = {
// 	ID          int      `json:"_id,omitempty" bson:"_id,omitempty"`
// 	Name        string   `json:"name,omitempty" bson:"name,omitempty" validate:"required"`
// 	Description string   `json:"description,omitempty" bson:"description,omitempty" validate:"required"`
// 	Summary     string   `json:"summary,omitempty" bson:"summary,omitempty" validate:"required"`
// 	OldPrice    float64  `json:"oldPrice,omitempty" bson:"oldPrice,omitempty" validate:"required"`
// 	NewPrice    float64  `json:"newPrice,omitempty" bson:"newPrice,omitempty" validate:"required"`
// 	Stock       int      `json:"stock,omitempty" bson:"stock,omitempty" validate:"required"`
// 	Slug        string   `json:"slug,omitempty" bson:"slug,omitempty" validate:"required"`
// 	Discount    float64  `json:"discount,omitempty" bson:"discount,omitempty" validate:"required"`
// 	CategoryId  int      `json:"categoryId,omitempty" bson:"categoryId,omitempty" validate:"required"`
// 	Status      string      `json:"status,omitempty" bson:"status,omitempty" validate:"required"`
// }

// Category {
// 	ID          int    `json:"_id,omitempty" bson:"_id,omitempty"`
// 	Name        string `json:"name" validate:"required"`
// 	Description string `json:"description" validate:"required"`
// 	Status      int    `json:"status" validate:"required"`
// 	Sort        int    `json:"sort" validate:"required"`
// }

// type Comment struct {
// 	ID        int      `json:"_id,omitempty" bson:"_id,omitempty"`
// 	Comment   string   `json:"comment" validate:"required"`
// 	ProductId int      `json:"productId,omitempty" bson:"productId,omitempty" validate:"required"`
// 	Likes     string   `json:"likes" validate:"required"`
// 	Dislikes  int      `json:"dislikes" validate:"required"`
// 	Likers    []string `json:"likers" bson:"likers" validate:"required"`
// 	Dislikers []string `json:"dislikers" bson:"dislikers" validate:"required"`
// }
