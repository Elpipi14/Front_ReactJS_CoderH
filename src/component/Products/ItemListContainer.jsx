// import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import FilterHocProducts from "../../hoc/HocFilterProducts";

const ItemListContainer = ({ products }) => {
  return (
    <div>
      <div className="flex flex-col items-center my-8 lg:mx-14">
        <div className="mt-6 text-center grid grid-cols-1 px-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              className="flex flex-col justify-between h-full border rounded-lg shadow-md p-4"
              key={product.id}
            >
              <h2 className="text-xl text-center mb-2 font-bold tracking-tight text-gray-900 min-h-[3rem]">
                {product.name}
              </h2>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between mb-4 flex-grow">
                <h3 className="text-sm text-gray-700">
                  
                    {product.description}
                
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
              <Link to={`/productos/${product.id}`}>
                <button 
                 onClick={() => window.scrollTo(0, 0)}
                 className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded shadow-md hover:bg-green-600 focus:shadow-outline focus:outline-none">
                  Ver Producto
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ItemListContainerHoc = FilterHocProducts(ItemListContainer);

export default ItemListContainerHoc;
