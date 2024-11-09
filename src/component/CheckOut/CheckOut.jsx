import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import FormCheck from "./Form"

const CheckOut = () => {
  const { cart, getTotal } = useContext(CartContext);

  return (
    <div className="font-[sans-serif] bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 max-lg:order-1">
          <div className="mt-16 max-w-lg">
              <h2 className="text-2xl font-extrabold text-gray-800">
                Métodos de Pago
              </h2>
            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              <div className="flex items-center">
                <div className="ml-4 flex gap-2">
                  <img
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="card1"
                  />
                  {/* <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" /> */}
                  <img
                    src="https://img.icons8.com/?size=100&id=nTLVtpxsNPaz&format=png&color=000000"
                    className="w-12"
                    alt="mercadoPago"
                  />
                </div>
              </div>
            </div>
            <FormCheck />
        </div>
      </div>

      <div className="bg-gray-100 p-1 rounded-md">
        <h2 className="text-2xl text-center font-extrabold text-gray-800">
          $ {getTotal()}
        </h2>
        {cart && cart.length > 0 ? (
          cart.map((productCart) => (
            <ul className="text-gray-800 mt-8 space-y-4">
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
