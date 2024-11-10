import { useState } from "react";
import Payment from "./payment";

const FormCheck = ({cart}) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
  });

  const cartItems = cart.map((products)=>{
    return products;
  })

  const handleInputChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(dataForm);
  };

  console.log(cartItems);
  
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="grid gap-4 mt-8">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Datos del Envio
          </h2>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            value={dataForm.name}
            onChange={handleInputChange}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />
          <input
            type="text"
            placeholder="Apellido"
            name="lastname"
            value={dataForm.lastname}
            onChange={handleInputChange}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={dataForm.email}
            onChange={handleInputChange}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />

          <input
            type="text"
            placeholder="Direccion"
            name="address"
            value={dataForm.address}
            onChange={handleInputChange}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />

          <input
            type="tel"
            placeholder="Telefono "
            name="phone"
            value={dataForm.phone}
            onChange={handleInputChange}
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />

          <Payment />
        </div>
      </form>
    </div>
  );
};

export default FormCheck;
