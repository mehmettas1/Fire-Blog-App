import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import { useEffect, useState } from "react";







const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  // export const googleProvider = new GoogleAuthProvider();

  // export const db = getDatabase(firebase);
  // export default firebase;
  


;

export const createUser = (email,password)=>{
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
  } catch (err) {
    console.log(err)
  }
  
  
  



}












//   REACT_APP_API_KEY=
// REACT_APP_AUTH_DOMAIN=
// REACT_APP_DATABASE_URL=
// REACT_APP_PROJECT_ID=
// REACT_APP_STORAGE_BUCKET=
// REACT_APP_MESSAGİNG_SENDER_ID=
// REACT_APP_APP_ID=