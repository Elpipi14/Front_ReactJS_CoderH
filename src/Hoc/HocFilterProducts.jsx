import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Link, useParams, useNavigate } from "react-router-dom";

import Spinner from "../component/Spinner/Spinner";

const FilterHocProducts = (Component) => {
  return function () {
    const { products, spinners } = useProducts();
    const [query, setQuery] = useState("");

    // Capturamos el parametro categoria
    const { idCategory } = useParams();

    //actualiza url del navegador..
    const navigate = useNavigate();
    
    // Maneja el input de búsqueda
    const changeInput = (e) => {
      setQuery(e.target.value.toLowerCase());
    };

    const search = () => {
      return products.filter((product) => {
        const FilterCategory = idCategory ? product.category === idCategory : true;
    
        // Verifica si `name` y `description` existen y convierte a minúsculas solo si son cadenas
        const searchFilter =
          (product.name?.toLowerCase().includes(query) || false) ||
          (product.description?.toLowerCase().includes(query) || false);
    
        return searchFilter && FilterCategory;
      });
    };

    const handleCategoryClick = (category) => {
      // Cambia la categoría al hacer clic sobre filtrado categorias
      const path = category ? `/productos/categoria/${category}` : "/productos";
      navigate(path);
    };

    return (
      <>
        <h1 className="font-rancho text-custom-gree-2 text-[50px] md:text-[80px] text-center my-4">Nuestros Productos</h1>
        <div className="">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
          </label>
          <div className="flex flex-col items-center w-auto">
            <div className="flex w-[300]">
            </div>
            <input
              type="text"
              id="text"
              className="text-sm w-72  h-10 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Buscar pollo con ensaladas..."
              onChange={changeInput}
            />
          </div>
          <div className="flex  flex-col items-center w-40 mx-auto sm:flex-row  sm:justify-center  mt-12    sm:text-center  sm:w-fit">
  <button
    onClick={() => handleCategoryClick()}
    aria-current="true"
    type="button"
    className="w-full px-4 py-2 font-medium text-center text-white bg-custom-gree-2 border-2 border-gray-800 rounded-t-lg cursor-pointer focus:outline-none"
  >Ver Todo
  </button>

  <button
    onClick={() => handleCategoryClick("carnes")}
    className="w-full px-4 mx-4 py-2 my-2 font-medium text-center border-y-2 border-gray-800 cursor-pointer hover:bg-gray-800 hover:text-green-300 focus:outline-none focus:ring-2 focus:text-green-500"
  >
    Carnes
  </button>

  <button
    onClick={() => handleCategoryClick("light")}
    className="w-full px-4 mx-4 my-2 py-2 font-medium text-center border-y-2 border-gray-800 cursor-pointer hover:bg-gray-800 hover:text-green-300 focus:outline-none focus:ring-2 focus:text-green-500"
  >
    Light
  </button>

  <button
    onClick={() => handleCategoryClick("pastas")}
    className="w-full px-3 mx-4 py-2 font-medium text-center border-y-2 border-gray-800 cursor-pointer hover:bg-gray-800 hover:text-green-300 focus:outline-none focus:ring-2 focus:text-green-500"
  >
    Pastas
  </button>
</div>

        </div>
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          {spinners === true ? <Spinner /> : <Component products={search()} />}
        </div>
      </>
    );
  };
};

export default FilterHocProducts;
