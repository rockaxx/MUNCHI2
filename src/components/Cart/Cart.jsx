import React, { useState, useEffect } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const Cart = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    console.log('asd');
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="relative">
        {showPopup && (
          <div className="absolute bottom-[110%] left-1/2 z-50 -translate-x-1/2 rounded bg-gray-800 px-3 py-1 text-sm whitespace-nowrap text-white shadow-lg">
            Added to cart!
          </div>
        )}
        <button
          onClick={handleClick}
          style={{ pointerEvents: 'auto' }}
          className="flex transform items-center justify-center rounded-full bg-[#ffa31a] p-3 text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaCartShopping size={20} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
