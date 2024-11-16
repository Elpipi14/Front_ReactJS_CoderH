import db from "./dbproducts/db.js"
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
      "id": 1,
      "name": "Milanesa de carnes con Puré",
      "description": "Deliciosa milanesa de carnes acompañada con un cremoso puré de papas.",
      "price": 350,
      "stock": 25,
      "image": "https://ibb.co/0CbdRy9",
      "available": true,
      "category": "carnes"
    },
    {
      "id": 2,
      "name": "Milanesa de Pollo con Ensalada",
      "description": "Milanesa de pollo crujiente con una fresca ensalada de lechuga, tomate y cebolla.",
      "price": 300,
      "stock": 18,
      "image": "https://example.com/milanesa_pollo_ensalada.jpg",
      "available": true,
      "category": "carnes"
    },
    {
      "id": 3,
      "name": "carnes al Horno con Papas",
      "description": "Tierno corte de carnes al horno con papas asadas y condimentos especiales.",
      "price": 500,
      "stock": 20,
      "image": "https://ibb.co/PDwHn01",
      "available": true,
      "category": "carnes"
    },
    {
      "id": 4,
      "name": "Pollo al Horno con Ensalada",
      "description": "Pollo al horno jugoso acompañado con ensalada fresca de estación.",
      "price": 450,
      "stock": 15,
      "image": "https://ibb.co/h83wYWn",
      "available": false,
      "category": "carnes"
    },
    {
      "id": 5,
      "name": "Lasagna Clásica",
      "description": "Lasagna de carnes con capas de pasta, queso, y salsa de tomate casera.",
      "price": 400,
      "stock": 12,
      "image": "https://ibb.co/6gjVTbQ",
      "available": true,
      "category": "pastas"
    },
    {
      "id": 6,
      "name": "Tarta de Verduras",
      "description": "Tarta casera de espinacas, acelga y queso con masa integral.",
      "price": 250,
      "stock": 22,
      "image": "https://ibb.co/NsCyKjn",
      "available": true,
      "category": "light"
    },
    {
      "id": 7,
      "name": "Ñoquis con Salsa Bolognesa",
      "description": "Ñoquis de papa con salsa bolognesa de carnes y tomate.",
      "price": 320,
      "stock": 30,
      "image": "https://ibb.co/L5yYqsY",
      "available": false,
      "category": "pastas"
    },
    {
      "id": 8,
      "name": "Sopa de Verduras",
      "description": "Sopa casera de verduras variadas, perfecta para un día frío.",
      "price": 200,
      "stock": 35,
      "image": "https://ibb.co/zQfHsxL",
      "available": true,
      "category": "light"
    },
    {
      "id": 9,
      "name": "Fideos con Salsa",
      "description": "Fideos al dente con una suave salsa de crema y queso.",
      "price": 370,
      "stock": 17,
      "image": "https://ibb.co/RCbDf5c",
      "available": true,
      "category": "pastas"
    },
    {
      "id": 10,
      "name": "Pollo grillado con Ensalada",
      "description": "Pollo a la parrilla con una ensalada mixta de vegetales frescos.",
      "price": 480,
      "stock": 10,
      "image": "https://ibb.co/cc3F3qf",
      "available": false,
      "category": "carnes"
    },
    {
      "id": 11,
      "name": "Empanadas de carnes",
      "description": "Empanadas de carnes jugosa, perfectas como plato principal o acompañamiento.",
      "price": 180,
      "stock": 40,
      "image": "https://ibb.co/tppRmYJ",
      "available": true,
      "category": "carnes"
    },
    {
      "id": 12,
      "name": "Hamburguesa Completa",
      "description": "Hamburguesa casera con queso, lechuga, tomate, cebolla y papas fritas.",
      "price": 420,
      "stock": 25,
      "image": "https://ibb.co/F09dChB",
      "available": true,
      "category": "carnes"
    },
    {
      "id": 13,
      "name": "Ensalada César con Pollo",
      "description": "Ensalada Cesar clasica con trozos de pollo grillado y aderezo Cesar.",
      "price": 300,
      "stock": 16,
      "image": "https://ibb.co/SwS6Lhc",
      "available": true,
      "category": "light"
    },
    {
      "id": 14,
      "name": "Pizza Margarita",
      "description": "Pizza de masa fina con salsa de tomate, mozzarella y albahaca fresca.",
      "price": 600,
      "stock": 8,
      "image": "https://ibb.co/c14VVmz",
      "available": false,
      "category": "pastas"
    },
    {
      "id": 15,
      "name": "Ravioles con Salsa de Tomate",
      "description": "Ravioles caseros de ricota y espinaca con salsa de tomate natural.",
      "price": 380,
      "stock": 14,
      "image": "https://ibb.co/wZtzcMR",
      "available": true,
      "category": "pastas"
    },
    {
      "id": 16,
      "name": "Bife de Chorizo con Pure",
      "description": "Bife de chorizo a la parrilla acompañado de papas fritas crujientes.",
      "price": 550,
      "stock": 10,
      "image": "https://ibb.co/192SJR3",
      "available": true,
      "category": "carnes"
    },
    {
      "id": 17,
      "name": "Polenta con Tuco",
      "description": "Polenta cremosa acompañada con salsa de tomate y carnes molida.",
      "price": 280,
      "stock": 30,
      "image": "https://ibb.co/qMTXzs5",
      "available": true,
      "category": "pastas"
    },
    {
      "id": 18,
      "name": "Tarta de Atún",
      "description": "Tarta casera de atún con cebolla y pimientos, ideal para un almuerzo ligero.",
      "price": 350,
      "stock": 20,
      "image": "https://ibb.co/51mpQK1",
      "available": true,
      "category": "light"
    },
    {
      "id": 19,
      "name": "Guiso de Lentejas",
      "description": "Guiso de lentejas con chorizo, ideal para los días más frescos.",
      "price": 400,
      "stock": 22,
      "image": "https://ibb.co/x72YP9k",
      "available": false,
      "category": "carnes"
    }
  ]

const seedProducts = () =>{
    const productsRef = collection(db, "products");
    products.map(({id, ...dataProduct})=>{
        addDoc(productsRef, dataProduct)
    });

    console.log("Products uploaded");
    return;
};

seedProducts();