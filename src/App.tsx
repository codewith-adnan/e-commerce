// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';

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

interface ToastData {
  message: string;
  image?: string;
}

function App() {
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState<ToastData | null>(null);

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  useEffect(() => {
    const handleShowToast = (event: Event) => {
      const customEvent = event as CustomEvent<ToastData>;
      setToast(customEvent.detail);
    };

    window.addEventListener('show-toast', handleShowToast);

    return () => {
      window.removeEventListener('show-toast', handleShowToast);
    };
  }, []);

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

          {toast && (
            <Toast
              message={toast.message}
              image={toast.image}
              onClose={() => setToast(null)}
            />
          )}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;