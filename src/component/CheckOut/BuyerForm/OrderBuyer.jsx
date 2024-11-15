import { Link } from "react-router-dom";

const OrderBuyer = ({idOrder}) => {
  return (
    <div className="flex flex-col items-center max-w-md  m-auto bg-white rounded-lg shadow-2xl p-6 text-center mb-10">
      <div className="card-body">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ¡Orden creada con éxito! 🎉
        </h1>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          📋 Número de orden: {idOrder}
        </h2>
        <h3 className="text-gray-600 mb-6">
          Guarde su número de orden para seguimiento...
        </h3>
        <div className="flex justify-center">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="min-w-[150px] font-semibold px-6 py-3 text-white bg-custom-gree-2 rounded-full shadow-md hover:bg-green-400 transition duration-300"
          >
            ⬅️ Volver a inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderBuyer;
