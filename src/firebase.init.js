// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz_Kl3jgjQ9VY1bk1koi56576Oe6sVl-M",
  authDomain: "genius-car-services-e8715.firebaseapp.com",
  projectId: "genius-car-services-e8715",
  storageBucket: "genius-car-services-e8715.appspot.com",
  messagingSenderId: "58172639652",
  appId: "1:58172639652:web:7346136ad9087fa2925931",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
