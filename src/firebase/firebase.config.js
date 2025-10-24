import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyClYBLX-RZ4NbcMFYoh9MUVxSiignSs3ts",
    authDomain: "toyhouse-firebase-auth.firebaseapp.com",
    projectId: "toyhouse-firebase-auth",
    storageBucket: "toyhouse-firebase-auth.firebasestorage.app",
    messagingSenderId: "765793412575",
    appId: "1:765793412575:web:fc2dec611674439ec7d06a"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
