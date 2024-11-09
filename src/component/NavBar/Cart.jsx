import { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";

const Cart = ({ closeMenu, closeNavBar }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    cart,
    getTotal,
    getTotalProduct,
    removeProduct,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const finalizarCompra = () => {
    closeMenu();
    closeNavBar();
  };

  return (
    <div className="p-4 w-[250px] md:w-[350px] ">
      {cart && cart.length > 0 ? (
        cart.map((productCart) => (
          <div key={productCart.id} className="flex flex-col border-b mb-4">
            <div>
              <img
                src={productCart.image}
                alt={productCart.name}
                className="shadow-xl transition-shadow w-24 m-auto mb-4 object-cover object-center"
              />
              <div className="flex justify-center text-base font-medium text-gray-900">
                <h3>{productCart.name}</h3>
                <p className="ml-4">${productCart.price * productCart.quantity}</p>
              </div>
              <p className="mt-1 text-sm text-center text-gray-500"></p>
            </div>

            <div className="flex flex-col items-center justify-evenly text-sm my-4">
              <div className="flex">
                <button
                  className="w-12"
                  onClick={() => decreaseQuantity(productCart.id)}
                >
                  -
                </button>

                <p className="text-gray-500 text-xl"> {productCart.quantity}</p>

                <button
                  className="w-12"
                  onClick={() => increaseQuantity(productCart.id)}
                >
                  +
                </button>
              </div>
              <div className="flex flex-col my-4 w-24">
                <button
                  onClick={() => removeProduct(productCart.id)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-4">El carrito esta vacío</p>
      )}

      <div className="border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>${getTotal()}</p>
        </div>

        <div className="flex flex-col items-center mt-6">
          <button
            onClick={() => clearCart()}
            type="button"
            className="rounded-md border border-transparent bg-custom-gree-2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600"
          >
            Vaciar Carrito
          </button>
        </div>
        <Link to="/carrito/checkout">
          <div className="flex flex-col mt-6">
            <button
            onClick={finalizarCompra}
              className="text-center rounded-md border border-transparent bg-custom-gree-2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600"
            >
              Finalizar Compra
            </button>
          </div>
        </Link>

        <Link to="/productos">
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <button
              type="button"
              className="font-medium text-custom-gree-2 hover:text-indigo-600"
            >
              Continuar Comprando
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
