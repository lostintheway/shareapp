import { RouteOptions } from "fastify";
import { MyReqUser, MyReqUserWid, ResDefault } from "../@types/types";
import { catchError } from "../constants/functions";
import { myMsg } from "../constants/variables";
import { DELETEbyId } from "../controllers/DELETE";
import { POSTany } from "../controllers/POST";

// DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

export const postProductLike: RouteOptions = {
  method: "POST",
  url: "/productlike",
  handler: (req, res) => likeProduct(req as MyReqUser, res),
};

export const postProductDisLike: RouteOptions = {
  method: "DELETE",
  url: "/productlike",
  handler: (req, res) => dislikeProduct(req as MyReqUserWid, res),
};

const likeProduct = (req: MyReqUser, res: ResDefault) => {
  POSTany("product_likes", req.body as Object)
    .then((result) => {
      res.status(200).send({ data: result, message: myMsg.POSTsuccess });
    })
    .catch((error) => {
      res.status(500).send(catchError(error, myMsg.serverErrorPOST));
    });
};

const dislikeProduct = (req: MyReqUserWid, res: ResDefault) => {
  DELETEbyId("product_likes", req.query.id)
    .then((result) => {
      res.status(200).send({ data: null, message: myMsg.DELsuccess });
    })
    .catch((error) => {
      res.status(500).send(catchError(error, myMsg.serverErrorPOST));
    });
};
