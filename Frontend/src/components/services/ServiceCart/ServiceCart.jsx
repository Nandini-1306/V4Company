import React from "react";
import "./ServiceCart.css";

const ServiceCart = ({ items = [] }) => {
  // Sample data - in a real app, this would come from your app state
  const cartItems = [
    { name: "Classic cleaning (2 bathrooms)", price: "₹785", originalPrice: "₹850", quantity: 1 },
    { name: "Classic cleaning (3 bathrooms)", price: "₹1,141", originalPrice: "₹1,200", quantity: 1 },
    { name: "Intense cleaning (2 bathrooms)", price: "₹950", originalPrice: "₹1,050", quantity: 1 },
    { name: "Intense cleaning (3 bathrooms)", price: "₹1,381", originalPrice: "₹1,500", quantity: 1 }
  ];

  const total = "₹4,257";
  const originalTotal = "₹4,740";
  const savedAmount = "₹483";

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price-container">
                  <span className="cart-item-price">{item.price}</span>
                  {item.originalPrice && (
                    <span className="cart-item-original-price">{item.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-input">{item.quantity}</span>
                <button className="quantity-btn">+</button>
              </div>
            </div>
          ))}

          <div className="cart-savings">
            <span>Congratulations! {savedAmount} saved so far!</span>
          </div>

          <div className="cart-total">
            <span>Total</span>
            <div>
              <span className="total-price">{total}</span>
              <span className="original-total-price">{originalTotal}</span>
            </div>
          </div>

          <button className="view-cart-btn">View Cart</button>
        </>
      )}
    </div>
  );
};

export default ServiceCart;