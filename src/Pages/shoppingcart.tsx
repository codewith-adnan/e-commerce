// src/components/ShoppingCart.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart from context

interface ShoppingCartProps {
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ onClose }) => {
  const navigate = useNavigate();
  // Replace hardcoded cartItems and subtotal with data from useCart
  const { cartItems, removeFromCart, getCartTotal } = useCart();

 
  const handleViewCartClick = () => {
    onClose(); // Close the sidebar first
    navigate('/pages/viewcart'); 
  };


  const handleCheckoutClick = () => {
    onClose(); 
    navigate('/pages/checkout'); 
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50" onClick={onClose}>
      <div className="bg-white w-full max-w-sm h-full shadow-lg flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          {/* Close button for the cart */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 cursor-pointer"
            onClick={onClose} 
          >
          
            <path
              d="M17 10C17 9.73478 16.8946 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H8C7.73478 9 7.48043 9.10536 7.29289 9.29289C7.10536 9.48043 7 9.73478 7 10V16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V10Z"
              stroke="#000"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11V7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5C12.5304 5 13.0391 5.21071 13.4142 5.58579C13.7893 5.96086 14 6.46957 14 7V11"
              stroke="#000"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-6">
                <div className="w-24 h-24 bg-[#FFF9E5] rounded-lg flex items-center justify-center p-2">
                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-gray-600 text-sm">
                    {item.quantity} <span className="mx-1">x</span> Rs. {item.price.toLocaleString('en-IN')}
                  </p>
                </div>
                <button
                  className="text-gray-400 hover:text-red-500"
                  onClick={() => removeFromCart(item.id)} 
                >
                  
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" fill="#E0E0E0" />
                    <path d="M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700">Subtotal</p>
            
            <p className="text-lg font-bold text-[#B88E2F]">Rs. {getCartTotal().toLocaleString('en-IN')}</p>
          </div>
          <div className="flex space-x-4">
           
            <button
              onClick={handleViewCartClick} 
              className="flex-1 px-4 py-2 border border-gray-800 rounded-xl text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              View Cart
            </button>
         
            <button
              onClick={handleCheckoutClick} 
              className="flex-1 px-4 py-2 border border-gray-800 rounded-xl text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;