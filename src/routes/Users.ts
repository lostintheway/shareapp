// user.signinUser,
// user.createUser,

import { RouteOptions } from "fastify";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { MyReqUser, ReqDefault, ResDefault } from "../@types/types";
import { mydb } from "../config/connectToDB";
import { catchError } from "../constants/functions";
import { myMsg } from "../constants/variables";
import { POSTany } from "../controllers/POST";
import { firebaseAuth } from "../server";

const createUserFn = async (req: MyReqUser, res: ResDefault) => {
  try {
    const user: UserRecord = await firebaseAuth.getUser(req.user);

    let myUser: any;

    if (user.emailVerified) {
      Object.assign(myUser, { email: user.email });
    }
    if (user.phoneNumber) {
      Object.assign(myUser, { phone: user.phoneNumber });
    }
    if (user.displayName) {
      Object.assign(myUser, { firstName: user.displayName });
    }
    POSTany("users", { ...myUser, userType: "user" } as Object)
      .then((result) => {
        res.status(200).send({ data: result, message: myMsg.POSTsuccess });
      })
      .catch((error) => {
        res.status(500).send(catchError(error, myMsg.serverErrorPOST));
      });
  } catch (error) {
    res.status(500).send(catchError(error, myMsg.googleSignErr));
  }
};

export const FindUser = (email: string) => {
  return new Promise(function (myResolve, myReject) {
    const quer = "SELECT * FROM users WHERE email=" + email;

    mydb.query(quer, function (err, result) {
      if (err) myReject(err);

      myResolve(result); // when successful
    });
  });
};

const signinUserFn = (req: ReqDefault, res: ResDefault) => {};

export const signupUser: RouteOptions = {
  method: "POST",
  url: "/signup",
  handler: (req, res) => createUserFn(req as MyReqUser, res),
};

// export const signinUser: RouteOptions = {
//   method: "POST",
//   url: "/signin",
//   handler: (req, res) => signinUserFn(req, res),
// };
