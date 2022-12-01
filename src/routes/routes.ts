import * as categ from "./Categorys";

export const adminRoutes = [
  // catego.PUTcategoryR,
  // product.POSTproductR,
  // product.GETAllproductss,
  // product.PUTproductR,
  // product.PATCHporductSoldout,
  // s3Routes.listImages,
  // s3Routes.deleteImage,
];

export const publicRoutes = [
  categ.postCategory,
  categ.editCategory,
  categ.getAllCategorysSorted,

  // product.GETproductById,
  // product.GETproductPublished,
  // product.GETproductsPublic,
  // product.SearchProduct,
  // user.signinUser,
  // user.createUser,
  // catego.GETAllcategory,
];
