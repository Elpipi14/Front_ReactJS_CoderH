import { useState } from "react";
import { Link } from "react-router-dom";
import TermsAndConditions from "../Users/Register/TermsAndConditions";
import visa from "../../assets/logo/visa.svg";

const Payment = () => {
  const [terms, setTerms] = useState(false);
  // Cambia el estado de terms para abrir/cerrar los términos y condiciones
  const toggleTerms = () => setTerms((prev) => !prev);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800">Datos de pago</h2>
      <input
        type="text"
        placeholder="Titular de la Tarjeta"
        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
      />

      <div className="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
        <img className="w-12 ml-3" src={visa} />
        <input
          type="number"
          placeholder="Numero de la Tarjeta"
          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <input
          type="number"
          placeholder="EXP."
          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
        />
        <input
          type="number"
          placeholder="CVV"
          className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
        />
      </div>

      <div className="flex items-center mt-4 ml-2 p-1">
        <input
          id="checkLegal"
          name="checkLegal"
          type="checkbox"
          className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="form" className="ml-3 block text-sm">
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
            type="button"
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
        <div className="flex items-center mt-3 ">
        <h2 className="text-xl font-extrabold text-gray-800">
                Métodos de Pago
        </h2>
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
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
          </div>
    </div>
  );
};

export default Payment;
