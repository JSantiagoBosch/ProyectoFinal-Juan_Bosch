import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Contacto from "./Components/Contacto/Contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from './Context/CartContext';
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";


function App() {

  return (

    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>

  )
}

export default App