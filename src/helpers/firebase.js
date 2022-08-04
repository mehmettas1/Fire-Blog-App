import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,

 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



const auth = getAuth(app);
export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await  createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // await updateProfile(auth.currentUser, {
      // displayName: displayName,
    // });
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => {
  signOut(auth);
};