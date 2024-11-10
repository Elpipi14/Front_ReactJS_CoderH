import { useState } from "react";
import { Link } from "react-router-dom";
import TermsAndConditions from "../Users/Register/TermsAndConditions";

import PaymentBuyer from "./BuyerForm/PaymentBuyer";
import ShippingBuyer from "./BuyerForm/ShippingBuyer";

const FormBuyer = ({ dataForm, handleInputChange, handleSubmitForm }) => {
  // Cambia el estado de terms para abrir/cerrar los términos y condiciones
  const [terms, setTerms] = useState(false);
  const toggleTerms = () => setTerms((prev) => !prev);

  // const handleInputChange = (event) => {
  //   setPayment({ ...payment, [event.target.name]: event.target.value });
  // };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <ShippingBuyer
          dataForm={dataForm} // Asegúrate de que esta línea esté incluida
          handleInputChange={handleInputChange}
        />

        <PaymentBuyer
          dataForm={dataForm}
          handleInputChange={handleInputChange}
          handleSubmitForm={handleSubmitForm}
        />

        <div className="flex items-center justify-center mt-4 ml-2 p-1">
          <input
            id="checkLegal"
            name="checkLegal"
            type="checkbox"
            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-3 block text-sm">
            Acepto
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleTerms();
              }}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Términos y Condiciones
            </button>
          </label>
          {/* Muestra el componente de Términos y Condiciones cuando terms es true */}
          {terms && <TermsAndConditions onClose={() => setTerms(false)} />}
        </div>

        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap gap-4 mt-8">
          <Link to="/">
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
            >
              Cancelar Compra
            </button>
          </Link>
          <button
            type="submit"
            className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
          >
            Pagar
          </button>
          <button
            type="button"
            className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
          >
            Ir a MercadoPago
          </button>
        </div>
      </form>
      <div className="flex items-center mt-3 ">
        <h2 className="text-xl p-4 font-extrabold text-gray-800">
          Métodos de Pago
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 mt-2">
          <div className="flex items-center">
            <div className="ml-2 flex gap-2">
              <img
                src="https://readymadeui.com/images/visa.webp"
                className="w-12"
                alt="card1"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                className="w-12"
                alt="card2"
              />
              <img
                src="https://img.icons8.com/?size=100&id=nTLVtpxsNPaz&format=png&color=000000"
                className="w-12"
                alt="mercadoPago"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuyer;
