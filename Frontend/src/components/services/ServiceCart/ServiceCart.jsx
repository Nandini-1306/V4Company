import React from "react";
import "./ServiceCart.css";

const ServiceCart = ({ cartItems, onUpdateQuantity, total, savings }) => {
  return (
    <div className="service-cart">
      <h3>Cart</h3>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="cart-icon">
            <img src="/assets/images/empty-cart.png" alt="Empty cart" />
          </div>
          <p>No items in your cart</p>
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
                    {item.originalPrice && (
                      <span className="original-price">₹{item.originalPrice}</span>
                    )}
                  </div>
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
              <p>Congratulations! ₹{savings} saved so far!</p>
            </div>
          )}

          <div className="cart-total">
            <span>Total</span>
            <div>
              <span className="total-price">₹{total}</span>
              {savings > 0 && (
                <span className="total-original">₹{total + savings}</span>
              )}
            </div>
          </div>

          <button className="view-cart-btn">View Cart</button>
        </>
      )}
    </div>
  );
};

export default ServiceCart;