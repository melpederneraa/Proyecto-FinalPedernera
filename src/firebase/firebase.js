import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD55BHQPtRNquVlxw3LcnTMY_vmWuyd3Ek",
  authDomain: "react-products-f429d.firebaseapp.com",
  projectId: "react-products-f429d",
  storageBucket: "react-products-f429d.firebasestorage.app",
  messagingSenderId: "407211137395",
  appId: "1:407211137395:web:b83cd000b982b9758c4d06"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
