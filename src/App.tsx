// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SingleProductPage from './Pages/SingleProduct';
import ShoppingCart from './Pages/shoppingcart';
import MyAcount from './Pages/MyAcount';
import ViewCart from './Pages/viewcart';
import Checkout from './Pages/chekout';
import ContactUs from './Pages/contact';
import MyBlog from './Pages/myblogs'
import About from './Pages/About';

import { CartProvider } from './context/CartContext';

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header onToggleCart={toggleCart} />

          <main className={`flex-grow ${showCart ? 'blur-sm pointer-events-none' : ''}`}>
            <Routes>
              <Route path="/pages/home" element={<Home />} />
              <Route path="/pages/shop" element={<Shop />} />
              <Route path="/pages/about" element={<About />} />
              <Route path="/pages/singleproduct" element={<SingleProductPage />} />
              <Route path="/pages/myacount" element={<MyAcount />} />
              <Route path="/pages/viewcart" element={<ViewCart />} />
              <Route path="/pages/checkout" element={<Checkout />} />
              <Route path="/pages/contact" element={<ContactUs />} />
              <Route path="/pages/myblogs" element={<MyBlog />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>

          <Footer />

          {showCart && <ShoppingCart onClose={toggleCart} />}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;