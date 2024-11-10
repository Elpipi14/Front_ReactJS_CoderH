import { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../Service/FireBaseDB";

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
        <OrderBuyer idOrder={idOrder} />
      )}
    </div>
  );
};

export default FormCheck;
