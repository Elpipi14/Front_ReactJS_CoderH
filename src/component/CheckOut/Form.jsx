import Payment from "./payment";

const FormCheck = () => {
  return (
    <div>
      <form>
        <div className="grid gap-4 mt-8">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Datos del Envio
          </h2>
          <input
            type="text"
            placeholder="Nombre"
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />
          <input
            type="text"
            placeholder="Apellido"
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />

          <input
            type="text"
            placeholder="Direccion"
            className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
          />

          <Payment />
        </div>
      </form>
    </div>
  );
};

export default FormCheck;
