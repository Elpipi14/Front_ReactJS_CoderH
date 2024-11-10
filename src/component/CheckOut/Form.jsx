import { useState } from "react";
import { Link } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../Service/FireBaseDB";

import FormBuyer from "./FormBuyer";

const FormCheck = ({ cart, getTotal, removeCart }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    fullname: "",
    numbercard: "",
    expiry: "",
    cvc: "",
    date: Timestamp.fromDate(new Date()),
  });

  const [idOrder, setIdOrder] = useState(null);

  const cartItems = cart.map((product) => {
    const { name, price, quantity, id } = product;
    return { name, price, quantity, id };
  });

  const handleInputChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: cartItems,
      total: getTotal(),
    };

    upLoadOrder(order);
  };

  const upLoadOrder = (newOrder) => {
    const orderRef = collection(db, "orders");
    addDoc(orderRef, newOrder)
    .then((res) => setIdOrder(res.id))
    .catch((error)=>console.log(error))
    .finally (()=>{
      removeCart()
    })
  };

  return (
    <div className="grid gap-4 mt-8">
      {idOrder === null ? (
        <FormBuyer
          dataForm={dataForm}
          handleInputChange={handleInputChange}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div class="flex flex-col items-center max-w-md  m-auto bg-white rounded-lg shadow-2xl p-6 text-center mb-10">
          <div class="card-body">
            <h1 class="text-2xl font-bold text-green-600 mb-4">
              ¡Orden creada con éxito! 🎉
            </h1>
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
            📋 Número de orden: {idOrder} 
            </h2>
            <h3 class="text-gray-600 mb-6">
              Guarde su número de orden para seguimiento...
            </h3>
            <div class="flex justify-center">
              <Link
                to="/"
                class="min-w-[150px] font-semibold px-6 py-3 text-white bg-custom-gree-2 rounded-full shadow-md hover:bg-green-400 transition duration-300"
              >
               ⬅️ Volver a inicio
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormCheck;
