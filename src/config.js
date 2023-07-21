// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// export { db } 


const firebaseConfig = {
  apiKey: "AIzaSyBEEd1RrK8OcezLOkrACtraKiT7jJIsNpU",
  authDomain: "budget-app-a92d4.firebaseapp.com",
  projectId: "budget-app-a92d4",
  storageBucket: "budget-app-a92d4.appspot.com",
  messagingSenderId: "691433740679",
  appId: "1:691433740679:web:26f364aae267aa1db19b22"
};

// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth2=app.auth()
const db=app.firestore()

// exports.firebase = firebase


export  {db,app,auth2,firebase};


