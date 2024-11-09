import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ecommerce-60060-163c7.firebaseapp.com",
  projectId: "ecommerce-60060-163c7",
  storageBucket: "ecommerce-60060-163c7.firebasestorage.app",
  messagingSenderId: "947114640839",
  appId: "1:947114640839:web:cf5c2a7b76528ed81445e2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db