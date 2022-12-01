import { initializeApp } from "firebase-admin/app";
import firebaseAdmin from "firebase-admin";

const credential = require("../../deals.json");

export const initializeFirebase = () => {
  initializeApp({ credential: firebaseAdmin.credential.cert(credential) });
};
