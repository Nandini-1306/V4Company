
// components/Cart/Cart.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ConfirmDialog from "../../components/UI/ConfirmDialog";
import './Cart.css';

const Cart = () => {
  const { items, total, savings, itemCount, loading, error, clearError,clearCart } = useCart();
  const navigate = useNavigate();
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  if (loading) {
    return (
      <div className="cart-container">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">
          <span className="cart-icon">🛒</span>
          Your Cart ({itemCount} items)
        </h1>
        
        {items.length > 0 && (
          <button 
            className="clear-cart-btn"
            onClick={() => setShowClearConfirm(true)}
          >
            Clear Cart
          </button>
        )}
      </div>

      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          {error}
          <button onClick={clearError} className="close-error">×</button>
        </div>
      )}

     {Array.isArray(items) && items.length === 0 ? (
  <div className="empty-cart">
    <div className="empty-cart-icon">🛒</div>
    <h2>Your cart is empty</h2>
    <p>Browse our services and add items to your cart</p>
    <button 
      className="browse-services-btn"
      onClick={() => navigate('/')}
    >
      Browse Services
    </button>
  </div>
) : (
  <div className="cart-content">
    <div className="cart-items">
      {Array.isArray(items) ? (
        items.map((item) => (
          <CartItem key={item._id || item.service_id} item={item} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>

    <div className="cart-sidebar">
      <CartSummary 
        total={total}
        savings={savings}
        itemCount={itemCount}
        onCheckout={() => navigate('/payment', {
  state: {
    amount: total * 100, // Razorpay expects amount in paise
    currency: 'INR',
    receiptId: `receipt_${Date.now()}`
  }
})}

      />
    </div>
  </div>
)}

      {showClearConfirm && (
        <ConfirmDialog
          title="Clear Cart"
          message="Are you sure you want to remove all items from your cart?"
          onConfirm={() => {
            clearCart();
            setShowClearConfirm(false);
          }}
          onCancel={() => setShowClearConfirm(false)}
        />
      )}
    </div>
  );
};
export default Cart;