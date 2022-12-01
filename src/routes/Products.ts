import { RouteOptions } from "fastify";
import { ZodError } from "zod";
import {
  MyReqUser,
  MyReqUserQuery,
  MyReqUserWid,
  ResDefault,
} from "../@types/types";
import { mydb } from "../config/connectToDB";
import { catchError, ErrIDlength, zodErrFn } from "../constants/functions";
import { myMsg } from "../constants/variables";
import { POSTany } from "../controllers/POST";
import { PUTbyId } from "../controllers/PUT";
import { ProductSchema, zParse } from "../validation/CategoryValida";
import { ProductPUTSchema } from "../validation/ProductValida";

export const postProduct: RouteOptions = {
  method: "POST",
  url: "/product",
  handler: (req, res) => postProductFn(req as MyReqUser, res),
};

export const getProductsPub: RouteOptions = {
  method: "GET",
  url: "/products",
  handler: (req, res) => getProductsPubFn(req as MyReqUserQuery, res),
};

export const editProduct: RouteOptions = {
  method: "PUT",
  url: "/product",
  handler: (req, res) => putProductFn(req as MyReqUserWid, res),
};

export const getProductsAd: RouteOptions = {
  method: "GET",
  url: "/products",
  handler: (req, res) => getProductsAdFn(req as MyReqUserQuery, res),
};

const getProductsAdFn = (req: MyReqUserQuery, res: ResDefault) => {
  if ((req.query.categoryid ?? "1").length > 2)
    throw new ErrIDlength(400, myMsg.idlength);

  if ((req.query.page ?? "1").length > 2)
    throw new ErrIDlength(400, myMsg.idlength);

  if ((req.query.size ?? "10").length > 3)
    throw new ErrIDlength(400, myMsg.idlength);

  const page = (req.query as Object).hasOwnProperty("page")
    ? parseInt(req.query.page ?? "1")
    : 1;
  const size = (req.query as Object).hasOwnProperty("size")
    ? parseInt(req.query.size ?? "10")
    : 10;
  const categoryId = (req.query as Object).hasOwnProperty("categoryid")
    ? "AND categoryId=" + req.query.categoryid
    : "";

  const status = (req.query as Object).hasOwnProperty("status")
    ? "AND status=" + req.query.status
    : "";

  const get = `SELECT *, Count(*) Over () AS TotalCount from products
              LEFT JOIN category ON products.categoryId = category.id
              WHERE id > ${page * size} ${categoryId}
              ORDER BY id
              LIMIT ${size};`;

  mydb.query(get, function (err, result) {
    if (err) throw err;
    return result;
  });
};

const getProductsPubFn = (req: MyReqUserQuery, res: ResDefault) => {
  if ((req.query.categoryid ?? "0").length > 2)
    throw new ErrIDlength(400, myMsg.idlength);

  if ((req.query.page ?? "1").length > 2)
    throw new ErrIDlength(400, myMsg.idlength);

  if ((req.query.size ?? "10").length > 3)
    throw new ErrIDlength(400, myMsg.idlength);

  const page = (req.query as Object).hasOwnProperty("page")
    ? parseInt(req.query.page ?? "1")
    : 1;
  const size = (req.query as Object).hasOwnProperty("size")
    ? parseInt(req.query.size ?? "10")
    : 10;
  const categoryId = (req.query as Object).hasOwnProperty("categoryid")
    ? "AND categoryId=" + req.query.categoryid
    : "";

  const get = `SELECT *, Count(*) Over () AS TotalCount from products
              LEFT JOIN category ON products.categoryId = category.id
              WHERE id > ${page * size} ${categoryId} AND status=enabled
              ORDER BY id
              LIMIT ${size};`;

  mydb.query(get, function (err, result) {
    if (err) throw err;
    return result;
  });
};

const postProductFn = (req: MyReqUser, res: ResDefault) => {
  zParse(ProductSchema, req as any)
    .then(() => {
      POSTany("products", req.body as Object)
        .then((result) => {
          res.status(200).send({ data: result, message: myMsg.POSTsuccess });
        })
        .catch((error) => {
          res.status(500).send(catchError(error, myMsg.serverErrorPOST));
        });
    })
    .catch((error: ZodError) => {
      res.status(400).send(zodErrFn(error));
    });
};

const putProductFn = (req: MyReqUserWid, res: ResDefault) => {
  if (req.query.id.length > 4) throw new ErrIDlength(400, myMsg.idlength);

  zParse(ProductPUTSchema, req as any)
    .then(() => {
      PUTbyId("products", req.body, req.query.id)
        .then((result) => {
          return { data: result, message: myMsg.POSTsuccess };
        })
        .catch((error) => {
          throw error;
        });
    })
    .catch((error) => {
      throw zodErrFn(error);
    });
};

// const postProductFn = (req: MyReqUser, res: ResDefault) => {
//     zParse(ProductSchema, req as any)
//       .then(() => {
//         POSTany("products", req.body as Object)
//           .then((result) => {
//             res.status(200).send({ data: result, message: myMsg.POSTsuccess });
//           })
//           .catch((error) => {
//             res.status(500).send(catchError(error, myMsg.serverErrorPOST));
//           });
//       })
//       .catch((error: ZodError) => {
//         res.status(400).send(zodErrFn(error));
//       });
//   };
