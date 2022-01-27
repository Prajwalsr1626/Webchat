 import React from 'react'
 import * as firebase from 'firebase'
 

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCW8eKHYkoYHySPg1oOyRondJP0cb9b0n8",
  authDomain: "webchat-86bf6.firebaseapp.com",
  projectId: "webchat-86bf6",
  storageBucket: "webchat-86bf6.appspot.com",
  messagingSenderId: "83879851925",
  appId: "1:83879851925:web:94ab87eef6cbad5f2ba89c",
  measurementId: "G-VEE8XDSJ37"
};

firebase.initializeApp(firebaseConfig);
  export default firebase;