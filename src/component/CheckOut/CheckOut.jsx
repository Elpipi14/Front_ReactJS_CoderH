import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import FormCheck from "./Form";

const CheckOut = () => {
  const { cart, getTotal, removeCart } = useContext(CartContext);

  return (
    <div className="font-[sans-serif] bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 max-lg:order-1">
          <div className="mt-16 max-w-lg">
            <FormCheck cart={cart} getTotal={getTotal} removeCart={removeCart} />
          </div>
        </div>
        <div className="bg-gray-100 p-1 rounded-md">
          <h2 className="text-2xl text-center font-extrabold text-gray-800">
            $ {getTotal()}
          </h2>
          {cart && cart.length > 0 ? (
            cart.map((productCart) => (
              <ul className="text-gray-800 mt-8 space-y-4" key={productCart.id}>
                <li className="flex flex-wrap p-auto text-sm">
                  <img
                    src={productCart.image}
                    alt="vianda"
                    className="shadow-xl transition-shadow w-24 m-auto mb-4 object-cover object-center"
                  />
                  {productCart.name}{" "}
                  <span className="ml-auto font-bold">
                    {productCart.quantity}
                  </span>
                  <span className="ml-2 font-bold">
                    ${productCart.price * productCart.quantity}
                  </span>
                </li>
              </ul>
            ))
          ) : (
            <p className="text-center mt-4">El carrito esta vacío</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
