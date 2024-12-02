// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgF2J5pcbzWeMORxcuH5Eiwfuq0OVXDFs",
  authDomain: "vacaytime-1ef2b.firebaseapp.com",
  projectId: "vacaytime-1ef2b",
  storageBucket: "vacaytime-1ef2b.firebasestorage.app",
  messagingSenderId: "596256263920",
  appId: "1:596256263920:web:9ce45505a6a4d8c8fcfc35"

    // apiKey: import.meta.key.VITE_FIREBASE_API_KEY,
    // authDomain: import.meta.key.VITE_FIREBASE_API_AUTH_DOMAIN,
    // projectId: import.meta.key.VITE_FIREBASE_API_PROJECT_ID,
    // storageBucket: import.meta.key.VITE_FIREBASE_API_STORAGE_BUCKET,
    // messagingSenderId: import.meta.key.VITE_FIREBASE_API_MESSAGING_SENDER_ID,
    // appId: import.meta.key.VITE_FIREBASE_API_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//Login

export const login = ({email, password}) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

//Registro

export const register = ({email,password,repeatPassword}) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

export const logOut = () => signOut(auth)