import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentBuyer = ({ dataForm, handleInputChange }) => {
  return (
    <>

      <h2 className="text-2xl my-4 p-2  text-center font-extrabold text-gray-800">
        Datos de pago
      </h2>

      <Cards
        number={dataForm.numbercard}
        expiry={dataForm.expiry}
        name={dataForm.fullname}
        cvc={dataForm.cvc}
      />

      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 p-2 my-4">
        <input
          type="text"
          placeholder="Titular de la Tarjeta"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleInputChange}
          className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
        />

        <input
          type="number"
          placeholder="Numero de la Tarjeta"
          name="numbercard"
          value={dataForm.numbercard}
          onChange={handleInputChange}
          className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm  border-b-2 outline-none  focus:border-gray-800 "
        />

        <input
          type="number"
          placeholder="exp"
          name="expiry"
          value={dataForm.expiry}
          onChange={handleInputChange}
          className="px-4 text-center py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
        />
        <input
          type="number"
          name="cvc"
          placeholder="cvc"
          value={dataForm.cvc}
          onChange={handleInputChange}
          className="px-4 text-center py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
        />
      </div>
      
    </>
  );
};

export default PaymentBuyer;
