/* eslint-disable no-unused-vars */
// components/services/ServiceCart/ServiceCart.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import "./ServiceCart.css";

const ServiceCart = ({ cartItems, onUpdateQuantity, total, savings }) => {
  const navigate = useNavigate();
  const { addToCart, loading } = useCart();
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddToMainCart = async () => {
     console.log("⏳ Trying to add items to main cart..."); 
    if (cartItems.length === 0) return;

    try {
      for (const item of cartItems) {
        const result = await addToCart({
          service_id:item.id,
          // id: item.id,
          name: item.name,
          price: item.price,
          originalPrice: item.originalPrice,
          quantity: item.quantity,
          duration: item.duration,
          image: item.image || '/assets/images/service-placeholder.png'
        });

        if (!result.success) {
          showNotification(`Error adding ${item.name}: ${result.error}`, 'error');
          return;
        }
      }
      
      showNotification('All items added to cart successfully!');
      // Clear local cart after successful addition
      cartItems.forEach(item => onUpdateQuantity(item.id, 0));
      
    } catch (error) {
      showNotification('Failed to add items to cart', 'error');
    }
  };

  return (
    <div className="service-cart">
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <h3>Service Cart</h3>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="cart-icon">
            <span>🛒</span>
          </div>
          <p>No services selected</p>
          <small>Add services to see them here</small>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <div className="item-price">
                    <span className="current-price">₹{item.price}</span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="original-price">₹{item.originalPrice}</span>
                    )}
                  </div>
                  {item.duration && (
                    <small className="item-duration">{item.duration}</small>
                  )}
                </div>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {savings > 0 && (
            <div className="savings-info">
              <span className="savings-icon">🎉</span>
              <p>You're saving ₹{savings}!</p>
            </div>
          )}

          <div className="cart-total">
            <div className="total-row">
              <span>Subtotal</span>
              <div className="price-group">
                <span className="total-price">₹{total}</span>
                {savings > 0 && (
                  <span className="total-original">₹{total + savings}</span>
                )}
              </div>
            </div>
          </div>

          <div className="cart-actions">
            <button 
              className="view-cart-btn"
              onClick={async () =>{
                await handleAddToMainCart();
                navigate('/cart')}}
            >
              Go to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCart;
