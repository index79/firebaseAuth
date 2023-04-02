// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf5yiNgX7425rOxfWMiPAuCBeWgT2jC04",
  authDomain: "fir-auth-74e90.firebaseapp.com",
  projectId: "fir-auth-74e90",
  storageBucket: "fir-auth-74e90.appspot.com",
  messagingSenderId: "181816414435",
  appId: "1:181816414435:web:7bb974de5f4b4fe2c1f5d6",
  measurementId: "G-ZDQ2HT4B5V",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
