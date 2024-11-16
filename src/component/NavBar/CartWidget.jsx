import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import cart from '../../assets/products/cart.svg';
import Cart from "./Cart";

export const CartWidget = ({ closeNavBar }) => {
    const { getTotalQuantity } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        // cerrar el menú del carrito cuando se haga clic fuera de él
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest(".cart-menu")) {
                closeMenu();
            }
        };

        // Esto asegura que se escuchen todos los clics mientras el componente está en pantalla
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            // eliminamos el evento cuando el componente se desmonte o cambie isMenuOpen
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center size-14 font-medium tracking-wide transition duration-200 rounded shadow-md transform hover:scale-105">
                <img src={cart} alt="Cart" width={40} />
            </button>
            <span className="relative bottom-10 right-3 rounded-full bg-red-500 px-[0.45em] py-[0.15em] text-[1rem] font-bold leading-none text-black">
                {getTotalQuantity()}
            </span>
            
            {isMenuOpen && (
                <div className="cart-menu absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-auto">
                    <div className="flex items-center justify-between border-b border-gray-200">
                        <h1 className="p-4 font-bold">Tu Carrito</h1>
                        <button title="Close Menu" className="m-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={closeMenu}>
                            X
                        </button>
                    </div>
                    <Cart closeMenu={closeMenu} closeNavBar={closeNavBar} />
                </div>
            )}
        </div>
    );
};
