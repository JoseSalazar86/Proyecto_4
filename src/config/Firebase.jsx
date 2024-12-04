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

export const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Retorna el usuario en caso de éxito
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      throw error; // Lanza el error para que el frontend pueda manejarlo
    }
  };
  
//Registro
export const register = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
      throw error;
    }
  };
  
//Logout
export const logOut = async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada exitosamente.");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
      throw error;
    }
  };
  