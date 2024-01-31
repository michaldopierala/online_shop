import logo from './logo.svg';
import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './page/Products';
import Navbar from './components/Navbar';
import About from './page/About';
import Footer from './components/Footer';
import ProductPage from './page/ProductPage';
import CartContext from './context/CartContext';
import Checkout from './page/Checkout';
import Main from './page/Main';
import ScrollToTop from './components/ScrollToTop';
import Test from './page/Test';
import Contact from './page/Contact.tsx';
import TermsConditions from './page/TermsConditions';

import ReactGA4 from 'react-ga4';
import Privacy from './page/Privacy';
import Shipping from './page/Shipping';
if (window.location.hostname !== "localhost") {
  ReactGA4.initialize("G-S1TP745FSQ");
}


function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main />}  >
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/terms" element={<TermsConditions/> } />
              <Route path="/privacy" element={<Privacy/> } />
              <Route path="/shipping" element={<Shipping/>} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/test" element={<Test/>} />
          </Routes>
          <Footer />

        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
