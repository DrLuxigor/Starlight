import admin from "firebase-admin";
import { getApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

var serviceAccount = require("../../config/starlight-4a23f-firebase-adminsdk-lffdb-3b66e92200.json");

let app = getApps().length
  ? getApp()
  : admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://starlight-4a23f-default-rtdb.europe-west1.firebasedatabase.app/",
    });

let db = getFirestore(app);
let auth = getAuth(app);
export { db, auth };
