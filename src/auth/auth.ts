import { MyReqUser, ReqDefault, ResDefault } from "../@types/types";
import { catchError } from "../constants/functions";
import { myMsg } from "../constants/variables";
import { FindUser } from "../routes/Users";
import { firebaseAuth } from "../server";

export const authFirebase = async (req: MyReqUser, res: ResDefault) => {
  const token: string | undefined = req.headers["authorization"];
  if (!token) return res.status(401).send({ message: myMsg.tokenNA });
  try {
    const decoded = await firebaseAuth.verifyIdToken(token);
    FindUser(decoded.email ?? "")
      .then((res) => {
        req.user = decoded;
      })
      .catch((error) => {
        res.status(401).send(catchError(error, myMsg.userNA));
      });
  } catch (error) {
    //if invalid token
    res.status(401).send(catchError(error, "Error verifying token"));
  }
};
