import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC56GM5PJcLUkGt4bmPtJ-2euY4H_UU5Rg",
    authDomain: "ecommerce-pet-shop.firebaseapp.com",
    projectId: "ecommerce-pet-shop",
    storageBucket: "ecommerce-pet-shop.appspot.com",
    messagingSenderId: "68560604058",
    appId: "1:68560604058:web:479696a5306e3b509f4823"
  };

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
  }