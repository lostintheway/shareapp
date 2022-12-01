import { RouteOptions } from "fastify";
import { ZodError } from "zod";
import { MyReqUser, MyReqUserWid, ResDefault } from "../@types/types";
import { catchError, ErrIDlength, zodErrFn } from "../constants/functions";
import { myMsg } from "../constants/variables";
import { GETcategorysSorted } from "../controllers/GET";
import { POSTany } from "../controllers/POST";
import { PUTbyId } from "../controllers/PUT";
import { CategorySchema, zParse } from "../validation/CategoryValida";

const postCategoryFn = (req: MyReqUser, res: ResDefault) => {
  zParse(CategorySchema, req as any)
    .then(() => {
      POSTany("categorys", req.body as Object)
        .then((result) => {
          res.status(200).send({ data: result, message: myMsg.POSTsuccess });
        })
        .catch((error) => {
          console.log({ error });

          res.status(500).send(catchError(error, myMsg.serverErrorPOST));
        });
    })
    .catch((error: ZodError) => {
      res.status(400).send(zodErrFn(error));
    });
};

const getAllCategorysSortedFn = (_req: MyReqUser, res: ResDefault) => {
  GETcategorysSorted("categorys")
    .then((result) => {
      res.status(200).send({ data: result, message: myMsg.POSTsuccess });
    })
    .catch((error) => {
      res.status(500).send(catchError(error, myMsg.serverErrorPOST));
    });
};

const putCategory = (req: MyReqUserWid, res: ResDefault) => {
  if (req.query.id.length > 2) throw new ErrIDlength(400, myMsg.idlength);
  PUTbyId("categorys", req.body, req.query.id)
    .then((result) => {
      return { data: result, message: myMsg.POSTsuccess };
    })
    .catch((error) => {
      throw error;
    });
};

export const postCategory: RouteOptions = {
  method: "POST",
  url: "/category",
  handler: (req, res) => postCategoryFn(req as MyReqUser, res),
};

export const getAllCategorysSorted: RouteOptions = {
  method: "GET",
  url: "/categorys",
  handler: (req, res) => getAllCategorysSortedFn(req as MyReqUser, res),
};

export const editCategory: RouteOptions = {
  method: "PUT",
  url: "/category",
  handler: (req, res) => putCategory(req as MyReqUserWid, res),
};
// catego.POSTcategoryR,
// catego.PUTcategoryR,
// product.POSTproductR,
// product.GETAllproductss,
// product.PUTproductR,
// product.PATCHporductSoldout,
// s3Routes.listImages,
// s3Routes.deleteImage,
// product.GETproductById,
// product.GETproductPublished,
// product.GETproductsPublic,
// product.SearchProduct,
// user.signinUser,
// user.createUser,
// catego.GETAllcategory,

// name VARCHAR(255) NOT NULL,
// description VARCHAR(500) NOT NULL,
// status VARCHAR(255) NOT NULL,
// sort INT NOT NULL,
