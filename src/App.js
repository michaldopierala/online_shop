import logo from './logo.svg';
import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Store from './page/Store';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import ProductPage from './page/ProductPage';
import CartContext from './context/CartContext';
import Checkout from './page/Checkout';
import Main from './page/Main';
import ScrollToTop from './components/ScrollToTop';
import Test from './page/Test';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CartContext>
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main />}  >
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ProductPage />} />
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
