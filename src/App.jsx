import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { CartProvider } from './Context/cartContext';

import './App.css';

import NavBar from './component/NavBar/NavBar';
import Content from './component/Content/Header';
import ItemListContainerHoc from './component/Products/ItemListContainer';
import ItemDetail from './component/Products/ItemDetail';
import Cart from './component/NavBar/Cart';
import Contact from './component/Contact/Contact';
import Register from './component/Users/Register/RegisterUser'
import CheckOut from './component/CheckOut/CheckOut';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/productos" element={<ItemListContainerHoc />} />
            <Route path="/productos/categoria/:idCategory" element={<ItemListContainerHoc />} />
            <Route path="/productos/:id" element={<ItemDetail />} />
            <Route path='/productos' element={<Cart />} />
            <Route path='/carrito/checkout' element={<CheckOut />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/registro' element={<Register />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
      
      </>
  );
}

export default App;
