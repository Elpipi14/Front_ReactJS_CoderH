const ShippingBuyer = ({ dataForm, handleInputChange }) => {
  return (
    <>
      <h2 className="text-2xl text-center font-extrabold text-gray-800">
        Datos del Envio
      </h2>
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={dataForm.name}
        onChange={handleInputChange}
        className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
      />
      <input
        type="text"
        placeholder="Apellido"
        name="lastname"
        value={dataForm.lastname}
        onChange={handleInputChange}
        className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={dataForm.email}
        onChange={handleInputChange}
        className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
      />

      <input
        type="text"
        placeholder="Direccion"
        name="address"
        value={dataForm.address}
        onChange={handleInputChange}
        className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
      />

      <input
        type="tel"
        placeholder="Telefono "
        name="phone"
        value={dataForm.phone}
        onChange={handleInputChange}
        className="px-4 py-3.5 text-center bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
      />
    </>
  );
};

export default ShippingBuyer;
