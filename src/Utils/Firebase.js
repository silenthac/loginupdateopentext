// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDV2RNNeZmkZe9U11Sd4VPD6rFyKiGVvw",
  authDomain: "opentextlogin-ecc5e.firebaseapp.com",
  projectId: "opentextlogin-ecc5e",
  storageBucket: "opentextlogin-ecc5e.appspot.com",
  messagingSenderId: "996327164572",
  appId: "1:996327164572:web:50ae19ceb7136b09be3b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();  // we are using this in every authentication code of firebase