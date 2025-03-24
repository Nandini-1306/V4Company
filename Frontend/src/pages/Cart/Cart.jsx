import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from the backend
    axios.get("http://localhost:8080/api/cart")
      .then(response => setCartItems(response.data))
      .catch(error => console.error("Error fetching cart items:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="text-purple-600 text-2xl mr-2">🛒</span> Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.services.length} services • ₹{item.price}</p>
                <ul className="text-gray-500 text-sm mt-1">
                  {item.services.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => navigate("/")}
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100"
              >
                Add Services
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Checkout
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
