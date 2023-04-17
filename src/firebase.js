import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAygPQWptXGvqiGjq-n_UOKGPqQgFvQOfQ",
  authDomain: "login-85aaf.firebaseapp.com",
  projectId: "login-85aaf",
  storageBucket: "login-85aaf.appspot.com",
  messagingSenderId: "343629336768",
  appId: "1:343629336768:web:5a71d6834d130819fcdd25",
  measurementId: "G-4NSN10X67D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);
export { app, auth, db};
