// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl11OvanrojWXQGQPBRx5yehCalhq9IGs",
  authDomain: "zep-shift-36fd5.firebaseapp.com",
  projectId: "zep-shift-36fd5",
  storageBucket: "zep-shift-36fd5.firebasestorage.app",
  messagingSenderId: "964966778868",
  appId: "1:964966778868:web:db978c59a6555ebf11dba1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
