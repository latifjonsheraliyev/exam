// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyD0j4nz0jJmcRkN161ALmv5T9mp6uxkcXc",
  authDomain: "tech-heim-f9fc6.firebaseapp.com",
  projectId: "tech-heim-f9fc6",
  storageBucket: "tech-heim-f9fc6.appspot.com",
  messagingSenderId: "853819566727",
  appId: "1:853819566727:web:f353ac91781a3cc36b6622",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
