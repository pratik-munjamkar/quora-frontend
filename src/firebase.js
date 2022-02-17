// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyY8JX8KYVKBFjUjOrEcy2otFYN9QyLVg",
  authDomain: "quora-d1bb9.firebaseapp.com",
  projectId: "quora-d1bb9",
  storageBucket: "quora-d1bb9.appspot.com",
  messagingSenderId: "571842628590",
  appId: "1:571842628590:web:9876f82745609ed7d2dcff",
  measurementId: "G-2SGVES115L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth()
const provider =new GoogleAuthProvider()

export {auth, provider}