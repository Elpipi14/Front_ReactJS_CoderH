import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../service/FireBaseDB";

// Obtenemos los productos de Firestore y devolvemos una promesa
const getProducts = async () => {
  const productsRef = collection(db, "products");
  const dataDb = await getDocs(productsRef);
  return dataDb.docs.map((productDb) => {
    const data = productDb.data();
    return { id: productDb.id, ...data };
  });
};

// Hook para obtener todos los productos
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [spinners, setSpinners] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setSpinners(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setSpinners(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, spinners };
};

// Hook para obtener un producto específico por ID
export const useProductsId = (id) => {
  const [spinners, setSpinners] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      setSpinners(true);
      try {
        const data = await getProducts();
        const findProduct = data.find((product) => product.id === id);
        setProduct(findProduct);
      } catch (error) {
        console.error(error);
      } finally {
        setSpinners(false);
      }
    };

    fetchProductById();
  }, [id]);

  return { product, spinners };
};
