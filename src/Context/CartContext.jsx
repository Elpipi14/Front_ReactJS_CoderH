import { createContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agrega el producto al array Cart
  const addItemCart = (newProduct) => {
    if (!isInCart(newProduct.id)) {
      setCart([...cart, newProduct]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agrego al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ya se agrego al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  //   Condicion si el producto ya esta agregado
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  //   Suma la cantidad del producto agregado
  const getTotalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0
    );

    return quantity;
  };

  const increaseQuantity = (itemId) => {
    setCart((disStock) =>
      disStock.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((aumStock) =>
      aumStock.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0)
    );
  };

  //   Elimina producto agregado en el carrito
  const removeProduct = (itemId) => {
    const cartDeleteProduct = cart.filter((product) => product.id !== itemId);
    if (cart.some((product) => product.id === itemId)) {
      setCart(cartDeleteProduct);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto eliminado del carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  //   Limpia el Carrito
  const clearCart = () => {
    cart.length === 0
      ? Swal.fire("El Carrito Está Vacío, Agregue Productos")
      : Swal.fire({
          title: "¿Estás seguro de vaciar el carrito?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, vaciar"
        }).then((result) => {
          if (result.isConfirmed) {
            setCart([]);
            Swal.fire({
              title: "Vaciado!",
              text: "El carrito ha sido vaciado.",
              icon: "success"
            });
          }
        });
  };

  const removeCart = () =>{
    setCart([]);
  }
  

  //   Suma el total del los productos agregados
  const getTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        getTotal,
        addItemCart,
        getTotalQuantity,
        removeProduct,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext }
