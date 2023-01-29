import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBr12MYzlmOfXNOCs3wJ_w0Y3qcniSJs1A",
  authDomain: "lk-common.firebaseapp.com",
  projectId: "lk-common",
  storageBucket: "lk-common.appspot.com",
  messagingSenderId: "868245318265",
  appId: "1:868245318265:web:3c828a8cc6c874fc14c2a8",
  measurementId: "G-SN8K11GFFV"
};

const clientApp = initializeApp(firebaseConfig);
const clientAuth = getAuth();
export {clientApp, clientAuth}