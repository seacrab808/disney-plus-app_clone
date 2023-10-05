// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjxxybMuePuSCyt9kg7qJPlnWjTsf0GwI",
  authDomain: "react-disney-plus-app-10db3.firebaseapp.com",
  projectId: "react-disney-plus-app-10db3",
  storageBucket: "react-disney-plus-app-10db3.appspot.com",
  messagingSenderId: "515024529207",
  appId: "1:515024529207:web:d2626cfb2312f1550bdcb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
