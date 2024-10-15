import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA7rr2-_XdSqwxcqQlvD5skdAZbXO_uWII",
  authDomain: "starlight-4a23f.firebaseapp.com",
  projectId: "starlight-4a23f",
  storageBucket: "starlight-4a23f.appspot.com",
  messagingSenderId: "345520748440",
  appId: "1:345520748440:web:0c86388bf918e811595ded",
  measurementId: "G-7DVBF3LG19"
};

const clientApp = initializeApp(firebaseConfig);
const clientAuth = getAuth();
export {clientApp, clientAuth}