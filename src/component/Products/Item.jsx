import ItemCount from "./ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";


const Item = ({product}) =>{
  const { name, image, description, price, stock} = product;
  const { addItemCart } = useContext(CartContext);

    const addProduct = (count) =>{
      const productCart = {...product, quantity: count};
      
      addItemCart(productCart);
    }

    return(
        <div className="flex flex-col items-center h-full w-full my-10 p-2">
        {/* Producto */}
        <div className="flex flex-col w-[300px] sm:w-[400px] items-center mx-8 mt-8 border rounded-lg shadow-md p-4">
          <h2 className="text-xl text-center mb-2 font-bold tracking-tight text-gray-900 min-h-[3rem]">
            {name}
          </h2>
          <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
  
          <div className="mt-4 flex flex-col items-center mb-4 flex-grow">
            <h3 className="text-sm text-gray-700">{description}</h3>
            <p className="text-sm font-medium text-gray-900">${price}</p>
          </div>
          <h3 className="mt-1 flex flex-col">Stock:{stock}</h3>
          <h3 className="mt-4 flex flex-col">Cantidad:</h3>
          <ItemCount stock={stock} addProduct={addProduct} />
        </div>
      </div>
    );
};

export default Item;