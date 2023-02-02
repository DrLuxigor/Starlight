import admin from "firebase-admin";
import { getApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

var serviceAccount = require("../../config/lk-common-firebase-adminsdk-k37es-f359ce35e5.json");

let app = getApps().length
  ? getApp()
  : admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://lk-common-default-rtdb.firebaseio.com",
    });

let db = getFirestore(app);
let auth = getAuth(app);
export { db, auth };
