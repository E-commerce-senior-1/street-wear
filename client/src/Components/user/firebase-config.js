
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Zkz87VTNt-VacJc2Ge-xeKbw2JLDDbk",
  authDomain: "e-commerce-aa77a.firebaseapp.com",
  projectId: "e-commerce-aa77a",
  storageBucket: "e-commerce-aa77a.appspot.com",
  messagingSenderId: "450469425032",
  appId: "1:450469425032:web:1e8bd51d05429c0da9543d",
  measurementId: "G-BP1TENR0ZX",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

