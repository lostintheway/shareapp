import { RouteOptions } from "fastify";
import { MyReqUser, MyReqUserWid, ResDefault } from "../@types/types";
import { catchError } from "../constants/functions";
import { myMsg } from "../constants/variables";
import { DELETEbyId } from "../controllers/DELETE";
import { POSTany } from "../controllers/POST";

// DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

export const postCommentLike: RouteOptions = {
  method: "POST",
  url: "/commentlike",
  handler: (req, res) => likecomment(req as MyReqUser, res),
};

export const postcommentDisLike: RouteOptions = {
  method: "DELETE",
  url: "/commentlike",
  handler: (req, res) => dislikecomment(req as MyReqUserWid, res),
};

const likecomment = (req: MyReqUser, res: ResDefault) => {
  POSTany("comment_likes", req.body as Object)
    .then((result) => {
      res.status(200).send({ data: result, message: myMsg.POSTsuccess });
    })
    .catch((error) => {
      res.status(500).send(catchError(error, myMsg.serverErrorPOST));
    });
};

const dislikecomment = (req: MyReqUserWid, res: ResDefault) => {
  if (req.query.id.length > 8) throw new Error(myMsg.invalidBody);
  DELETEbyId("comment_likes", req.query.id)
    .then((result) => {
      res.status(200).send({ data: null, message: myMsg.DELsuccess });
    })
    .catch((error) => {
      res.status(500).send(catchError(error, myMsg.serverErrorPOST));
    });
};
