import firebase from "firebase/compat/app";
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBEEd1RrK8OcezLOkrACtraKiT7jJIsNpU",
    authDomain: "budget-app-a92d4.firebaseapp.com",
    projectId: "budget-app-a92d4",
    storageBucket: "budget-app-a92d4.appspot.com",
    messagingSenderId: "691433740679",
    appId: "1:691433740679:web:26f364aae267aa1db19b22"
  };
firebase.initializeApp(firebaseConfig)


  export default firebase;