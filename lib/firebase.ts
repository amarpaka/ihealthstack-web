
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmbWax71HZqtxeVAP7WR70PIHrgfQyFMM",
  authDomain: "ihealthstack.firebaseapp.com",
  projectId: "ihealthstack",
  storageBucket: "ihealthstack.firebasestorage.app",
  messagingSenderId: "799693589492",
  appId: "1:799693589492:web:acdc97538058d4129607a1",
  measurementId: "G-F6J4YG4W1J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
