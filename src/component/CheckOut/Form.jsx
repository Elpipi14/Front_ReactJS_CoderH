import { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../Service/FireBaseDB";
import completeFormSchema from "../../utils/Validation/formValidation.js";
import Swal from "sweetalert2"; // Importa SweetAlert2

import FormBuyer from "./FormBuyer";
import OrderBuyer from "./BuyerForm/OrderBuyer";

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

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await completeFormSchema(dataForm);

      if (response.status === "error") {
        // Muestra los errores con SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Errores de validación",
          html: response.message.map((msg) => `<p>${msg}</p>`).join(""), // Muestra cada mensaje en una línea
        });
        return; // Detiene la ejecución si hay errores de validación
      }

      const order = {
        buyer: { ...dataForm },
        products: cartItems,
        total: getTotal(),
      };

      await upLoadOrder(order);
    } catch (error) {
      console.log("Error al procesar la orden:", error);
    }
  };

  const upLoadOrder = async (newOrder) => {
    try {
      const orderRef = collection(db, "orders");
      const data = await addDoc(orderRef, newOrder);
      setIdOrder(data.id); // Guarda el ID de la orden generada
      removeCart(); // Limpia el carrito solo si la orden fue exitosa
    } catch (error) {
      console.log("Error al subir la orden:", error);
    }
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
        <OrderBuyer idOrder={idOrder} />
      )}
    </div>
  );
};

export default FormCheck;
