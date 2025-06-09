
// components/Cart/CartSummary.jsx
const CartSummary = ({ total, savings, itemCount, onCheckout }) => {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      
      <div className="summary-row">
        <span>Items ({itemCount})</span>
        <span>₹{total + savings}</span>
      </div>
      
      {savings > 0 && (
        <div className="summary-row savings">
          <span>Savings</span>
          <span>-₹{savings}</span>
        </div>
      )}
      
      <div className="summary-divider"></div>
      
      <div className="summary-row total">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      
      {savings > 0 && (
        <div className="savings-highlight">
          🎉 You're saving ₹{savings}!
        </div>
      )}
      
      <button className="checkout-btn" onClick={onCheckout}>
        Proceed to Checkout
      </button>
      
      <div className="secure-checkout">
        🔒 Secure Checkout
      </div>
    </div>
  );
};
export default CartSummary;