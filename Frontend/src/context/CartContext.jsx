/* eslint-disable no-unused-vars */
// // context/CartContext.jsx
// import React, { createContext, useContext, useReducer, useEffect } from 'react';
// import axios from 'axios';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_CART':
//       return {
//         ...state,
//         items: action.payload.items || [],
//         total: action.payload.total || 0,
//         savings: action.payload.savings || 0,
//         itemCount: action.payload.itemCount || 0,
//         loading: false
//       };
//     case 'SET_LOADING':
//       return {
//         ...state,
//         loading: action.payload
//       };
//     case 'SET_ERROR':
//       return {
//         ...state,
//         error: action.payload,
//         loading: false
//       };
//     case 'CLEAR_ERROR':
//       return {
//         ...state,
//         error: null
//       };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   items: [],
//   total: 0,
//   savings: 0,
//   itemCount: 0,
//   loading: false,
//   error: null
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const API_BASE_URL = 'http://localhost:8080/api';

//   // Fetch cart on component mount
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     try {
//       const response = await axios.get(`${API_BASE_URL}/cart`);
//       if (response.data.success) {
//         dispatch({ 
//           type: 'SET_CART', 
//           payload: {
//             items: response.data.cart.items,
//             total: response.data.cart.total,
//             savings: response.data.cart.savings,
//             itemCount: response.data.itemCount
//           }
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       dispatch({ 
//         type: 'SET_ERROR', 
//         payload: error.response?.data?.error || 'Failed to fetch cart' 
//       });
//     }
//   };

//   const addToCart = async (item) => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/cart/add`, {
//         service_id: item.id,
//         quantity: item.quantity || 1,
//         price: item.price,
//         originalPrice: item.originalPrice,
//         name: item.name,
//         image: item.image,
//         duration: item.duration
//       });

//       if (response.data.success) {
//         dispatch({ 
//           type: 'SET_CART', 
//           payload: {
//             items: response.data.cart.items,
//             total: response.data.cart.total,
//             savings: response.data.cart.savings,
//             itemCount: response.data.itemCount
//           }
//         });
//         return { success: true, message: response.data.message };
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       const errorMessage = error.response?.data?.error || 'Failed to add item to cart';
//       dispatch({ type: 'SET_ERROR', payload: errorMessage });
//       return { success: false, error: errorMessage };
//     }
//   };

//   const updateQuantity = async (serviceId, quantity) => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     try {
//       const response = await axios.put(`${API_BASE_URL}/cart/update`, {
//         service_id: serviceId,
//         quantity: quantity
//       });

//       if (response.data.success) {
//         dispatch({ 
//           type: 'SET_CART', 
//           payload: {
//             items: response.data.cart.items,
//             total: response.data.cart.total,
//             savings: response.data.cart.savings,
//             itemCount: response.data.itemCount
//           }
//         });
//         return { success: true };
//       }
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       const errorMessage = error.response?.data?.error || 'Failed to update quantity';
//       dispatch({ type: 'SET_ERROR', payload: errorMessage });
//       return { success: false, error: errorMessage };
//     }
//   };

//   const removeFromCart = async (serviceId) => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/cart/remove/${serviceId}`);

//       if (response.data.success) {
//         dispatch({ 
//           type: 'SET_CART', 
//           payload: {
//             items: response.data.cart.items,
//             total: response.data.cart.total,
//             savings: response.data.cart.savings,
//             itemCount: response.data.itemCount
//           }
//         });
//         return { success: true };
//       }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//       const errorMessage = error.response?.data?.error || 'Failed to remove item';
//       dispatch({ type: 'SET_ERROR', payload: errorMessage });
//       return { success: false, error: errorMessage };
//     }
//   };

//   const clearCart = async () => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     try {
//       const response = await axios.delete(`${API_BASE_URL}/cart/clear`);

//       if (response.data.success) {
//         dispatch({ 
//           type: 'SET_CART', 
//           payload: {
//             items: [],
//             total: 0,
//             savings: 0,
//             itemCount: 0
//           }
//         });
//         return { success: true };
//       }
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//       const errorMessage = error.response?.data?.error || 'Failed to clear cart';
//       dispatch({ type: 'SET_ERROR', payload: errorMessage });
//       return { success: false, error: errorMessage };
//     }
//   };

//   const clearError = () => {
//     dispatch({ type: 'CLEAR_ERROR' });
//   };

//   const value = {
//     ...state,
//     addToCart,
//     updateQuantity,
//     removeFromCart,
//     clearCart,
//     fetchCart,
//     clearError
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export default CartContext; 

// context/CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [total, setTotal] = useState(0);
  const [savings, setSavings] = useState(0);
const BASE_URL = 'http://localhost:8080';



  //  Fetch cart from backend
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/cart`,{withCredentials:true});
      setItems(res.data.cart.items || []);
    } catch (err) {
      setError("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  //  Add or update item in cart
  const addToCart = async (item) => {
  try {
    await axios.post(`${BASE_URL}/api/cart/add`, item, { withCredentials: true });
    await fetchCart(); // refresh cart after add
    return { success: true };
  } catch (err) {
    setError("Failed to add item");
    return { success: false, error: "Failed to add item" };
  }
};


  const updateQuantity = async (serviceId, quantity) => {
    try {
      await axios.patch(`${BASE_URL}/api/cart/update/${serviceId}`, { quantity },{withCredentials:true});
      await fetchCart();
    } catch (err) {
      setError("Failed to update quantity");
    }
  };

  const removeFromCart = async (serviceId) => {
    try {
      await axios.delete(`${BASE_URL}/api/cart/remove/${serviceId}`,{withCredentials:true});
      await fetchCart();
    } catch (err) {
      setError("Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/cart/clear`,{withCredentials:true});
      setItems([]);
    } catch (err) {
      setError("Failed to clear cart");
    }
  };

  const clearError = () => setError(null);

  useEffect(() => {
    fetchCart();
  }, []);

 useEffect(() => {
  if (!Array.isArray(items)) return;

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalSavings = items.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);

  setTotal(totalPrice);
  setSavings(totalSavings);
}, [items]);


  return (
    <CartContext.Provider
      value={{
        items,
        loading,
        error,
        total,
        savings,
        itemCount:items.reduce((sum, item) => sum + item.quantity, 0),
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        clearError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
  
};

export const useCart = () => useContext(CartContext);
