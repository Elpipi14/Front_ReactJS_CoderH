import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import FormBuyer from "./FormBuyer";

const FormCheck = ({ cart, getTotal }) => {
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

  const cartItems = cart.map((product) => {
    const { name, price, quantity } = product;
    return { name, price, quantity };
  });

  const handleInputChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const order = {
    buyer: { ...dataForm },
    products: cartItems,
    total: getTotal(),
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log(order);
  };

  return (
    <div className="grid gap-4 mt-8">
      <FormBuyer
        dataForm={dataForm}
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default FormCheck;
