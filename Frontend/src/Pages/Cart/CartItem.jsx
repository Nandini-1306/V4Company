// components/Cart/CartItem.jsx
import { useCart } from "../../context/CartContext";
import { useState } from "react";
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity) => {
  setIsUpdating(true);
  if (newQuantity <= 0) {
    await removeFromCart(item.service_id);
  } else {
    await updateQuantity(item.service_id, newQuantity);
  }
  setIsUpdating(false);
};


  const handleRemove = async () => {
    setIsUpdating(true);
    await removeFromCart(item.service_id);
    setIsUpdating(false);
  };

  return (
    <div className={`cart-item ${isUpdating ? 'updating' : ''}`}>
      <div className="item-image">
        {item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div className="placeholder-image">📋</div>
        )}
      </div>

      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        {item.duration && (
          <p className="item-duration">Duration: {item.duration}</p>
        )}
        
        <div className="item-pricing">
          <span className="current-price">₹{item.price}</span>
          {item.originalPrice && item.originalPrice > item.price && (
            <>
              <span className="original-price">₹{item.originalPrice}</span>
              <span className="discount">
                Save ₹{item.originalPrice - item.price}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="item-controls">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={isUpdating}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={isUpdating}
          >
            +
          </button>
        </div>
        
        <button
          className="remove-btn"
          onClick={handleRemove}
          disabled={isUpdating}
        >
          Remove
        </button>
      </div>
       
      <div className="item-total">
        ₹{item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;