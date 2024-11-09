import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();

// Este archivo está diseñado específicamente para cargar productos en la base de datos desde Node.js.
// Dado que `import.meta.env.VITE_API_KEY` solo funciona en el entorno de Vite y no es reconocido en Node.js,
// aquí usamos `dotenv` para cargar las variables de entorno directamente desde `.env`.
// Esto permite que el script se ejecute correctamente en Node.js sin problemas de compatibilidad.

const firebaseConfig = {
  apiKey:  process.env.API_KEY_LOADPRODUCTS,
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