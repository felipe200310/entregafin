// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore"; "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  //apiKey: "AIzaSyACrFA8WjojciR5bgatpx-bL0C-fkRnNmQ",
 // authDomain: "basecredismart.firebaseapp.com",
  //projectId: "basecredismart",
//  storageBucket: "basecredismart.firebasestorage.app",
//  messagingSenderId: "459663686556",
 // appId: "1:459663686556:web:399f530026a8f4c3096659",
  //measurementId: "G-714VN97C5M"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//export const db= getFirestore (app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACrFA8WjojciR5bgatpx-bL0C-fkRnNmQ",
  authDomain: "basecredismart.firebaseapp.com",
  projectId: "basecredismart",
  storageBucket: "basecredismart.appspot.com",
  messagingSenderId: "459663686556",
  appId: "1:459663686556:web:399f530026a8f4c3096659",
  measurementId: "G-714VN97C5M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
