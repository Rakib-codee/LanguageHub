// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRH2Tdh_gxRU2p8plv2RfzAZzsNzmeO0I",
  authDomain: "languagehub-ce178.firebaseapp.com",
  projectId: "languagehub-ce178",
  storageBucket: "languagehub-ce178.firebasestorage.app",
  messagingSenderId: "509182332531",
  appId: "1:509182332531:web:9cdab88ebe4e25e5352406"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth();
export default app;