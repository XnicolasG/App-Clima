import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhP-kNsnEcSEfou6L7F7tZxi1EiAuci2A",
  authDomain: "app-clima-4709e.firebaseapp.com",
  projectId: "app-clima-4709e",
  storageBucket: "app-clima-4709e.appspot.com",
  messagingSenderId: "588815320941",
  appId: "1:588815320941:web:4e2a9fc413080c335c7c64"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export{
    app,
    google
}