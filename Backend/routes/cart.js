// // routes/cart.js
// const express = require("express");
// const router = express.Router();
// const Cart = require("../models/cartModel");
// const Service = require("../models/serviceModel");
// const mockAuth = require("../middleware/mockAuth");
// const mongoose = require("mongoose");

// // Apply mock user middleware
// router.use(mockAuth);

// // Get current cart
// router.get("/", async (req, res) => {
//   try {
//     let cart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");
    
//     if (!cart) {
//       cart = new Cart({ user_id: req.user.id, items: [] });
//       await cart.save();
//     }
//     console.log("cart from DB:",cart);
//     res.json({
//       success: true,
//       cart: cart,
//       itemCount: (cart?.items || []).items.reduce((sum, item) => sum + item.quantity, 0)
//     });
//   } catch (err) {
//     console.error("Error fetching cart:", err);
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to fetch cart.",
//       message: err.message 
//     });
//   }
// });

// // Add item to cart
// router.post("/add", async (req, res) => {
//   const { service_id, quantity = 1, price, originalPrice, name, image, duration } = req.body;

//   // Validation
//   if (!service_id || !price || !name) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "Missing required fields: service_id, price, name" 
//     });
//   }

//   if (!mongoose.Types.ObjectId.isValid(service_id)) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "Invalid service_id format" 
//     });
//   }

//   try {
//     let cart = await Cart.findOne({ user_id: req.user.id });

//     if (!cart) {
//       cart = new Cart({ user_id: req.user.id, items: [] });
//     }

//     const itemIndex = cart.items.findIndex(item => item.service_id.toString() === service_id);

//     if (itemIndex > -1) {
//       // Item already exists, update quantity
//       cart.items[itemIndex].quantity += quantity;
//     } else {
//       // Add new item
//       cart.items.push({ 
//         service_id, 
//         quantity, 
//         price,
//         originalPrice,
//         name,
//         image,
//         duration
//       });
//     }

//     await cart.save();

//     const updatedCart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

//     res.json({
//       success: true,
//       message: "Item added to cart successfully",
//       cart: updatedCart,
//       itemCount: (updatedCart?.items || []).reduce((sum, item) => sum + item.quantity, 0)
//     });
//   } catch (err) {
//     console.error("Error adding item to cart:", err);
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to add item to cart.",
//       message: err.message 
//     });
//   }
// });

// // Update item quantity
// router.put("/update", async (req, res) => {
//   const { service_id, quantity } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(service_id)) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "Invalid service_id format" 
//     });
//   }

//   try {
//     const cart = await Cart.findOne({ user_id: req.user.id });
    
//     if (!cart) {
//       return res.status(404).json({ 
//         success: false, 
//         error: "Cart not found" 
//       });
//     }

//     const itemIndex = cart.items.findIndex(item => item.service_id.toString() === service_id);

//     if (itemIndex === -1) {
//       return res.status(404).json({ 
//         success: false, 
//         error: "Item not found in cart" 
//       });
//     }

//     if (quantity <= 0) {
//       cart.items.splice(itemIndex, 1);
//     } else {
//       cart.items[itemIndex].quantity = quantity;
//     }

//     await cart.save();

//     const updatedCart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

//     res.json({
//       success: true,
//       message: quantity <= 0 ? "Item removed from cart" : "Item quantity updated",
//       cart: updatedCart,
//       itemCount: (updatedCart?.items || []).reduce((sum, item) => sum + item.quantity, 0)
//     });
//   } catch (err) {
//     console.error("Error updating cart item:", err);
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to update cart item.",
//       message: err.message 
//     });
//   }
// });

// // Remove item from cart
// router.delete("/remove/:service_id", async (req, res) => {
//   const { service_id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(service_id)) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "Invalid service_id format" 
//     });
//   }

//   try {
//     const cart = await Cart.findOne({ user_id: req.user.id });
    
//     if (!cart) {
//       return res.status(404).json({ 
//         success: false, 
//         error: "Cart not found" 
//       });
//     }

//     const itemIndex = cart.items.findIndex(item => item.service_id.toString() === service_id);

//     if (itemIndex === -1) {
//       return res.status(404).json({ 
//         success: false, 
//         error: "Item not found in cart" 
//       });
//     }

//     cart.items.splice(itemIndex, 1);
//     await cart.save();

//     const updatedCart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

//     res.json({
//       success: true,
//       message: "Item removed from cart",
//       cart: updatedCart,
//       itemCount: (updatedCart?.items || []).reduce((sum, item) => sum + item.quantity, 0)
//     });
//   } catch (err) {
//     console.error("Error removing cart item:", err);
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to remove cart item.",
//       message: err.message 
//     });
//   }
// });

// // Clear entire cart
// router.delete("/clear", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user_id: req.user.id });
    
//     if (!cart) {
//       return res.status(404).json({ 
//         success: false, 
//         error: "Cart not found" 
//       });
//     }

//     cart.items = [];
//     await cart.save();

//     res.json({
//       success: true,
//       message: "Cart cleared successfully",
//       cart: cart,
//       itemCount: 0
//     });
//   } catch (err) {
//     console.error("Error clearing cart:", err);
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to clear cart.",
//       message: err.message 
//     });
//   }
// });

// // Get cart summary (for header/navbar)
// router.get("/summary", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user_id: req.user.id });
    
//     const summary = {
//       itemCount: cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0,
//       total: cart ? cart.total : 0,
//       savings: cart ? cart.savings : 0
//     };

//     res.json({
//       success: true,
//       summary
//     });
//   } catch (err) {
//     console.error("Error fetching cart summary:", err);
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to fetch cart summary.",
//       message: err.message 
//     });
//   }
// });

// module.exports = router;
// routes/cart.js
const express = require("express");
const router = express.Router();
const Cart = require("../models/cartModel");
require("../models/serviceModel");
const mockAuth = require("../middleware/mockAuth");
const mongoose = require("mongoose");

router.use(mockAuth);

// Get current cart
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

    if (!cart || cart.items.length === 0) {
      cart = new Cart({ user_id: req.user.id, items: [] });
      await cart.save();
    }

    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    res.json({
      success: true,
      cart,
      itemCount:cart.items.reduce((sum,item)=> sum+item.quantity,0),
    });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({
      success: false,
      error: "Failed to fetch cart.",
      message: err.message
    });
  }
});

// Add item to cart
router.post("/add", async (req, res) => {
  console.log("Incoming cart add request:", req.body);
  const { service_id, quantity = 1, price, originalPrice, name, image, duration } = req.body;

  if (!service_id || !price || !name) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: service_id, price, name"
    });
  }

  // if (!mongoose.Types.ObjectId.isValid(service_id)) {
  //   return res.status(400).json({
  //     success: false,
  //     error: "Invalid service_id format"
  //   });
  // }

  try {
    let cart = await Cart.findOne({ user_id: req.user.id });

    if (!cart) {
      cart = new Cart({ user_id: req.user.id, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.service_id.toString() === service_id);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ service_id, quantity, price, originalPrice, name, image, duration });
    }

    await cart.save();

    const updatedCart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

    res.json({
      success: true,
      message: "Item added to cart successfully",
      cart: updatedCart,
      itemCount: updatedCart.items.reduce((sum, item) => sum + item.quantity, 0)
    });
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({
      success: false,
      error: "Failed to add item to cart.",
      message: err.message
    });
  }
});

// Update item quantity
router.put("/update", async (req, res) => {
  const { service_id, quantity } = req.body;

  // if (!mongoose.Types.ObjectId.isValid(service_id)) {
  //   return res.status(400).json({
  //     success: false,
  //     error: "Invalid service_id format"
  //   });
  // }

  try {
    const cart = await Cart.findOne({ user_id: req.user.id });

    if (!cart) {
      return res.status(404).json({ success: false, error: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(item => item.service_id.toString() === service_id);

    if (itemIndex === -1) {
      return res.status(404).json({ success: false, error: "Item not found in cart" });
    }

    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();

    const updatedCart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

    res.json({
      success: true,
      message: quantity <= 0 ? "Item removed from cart" : "Item quantity updated",
      cart: updatedCart,
      itemCount: updatedCart.items.reduce((sum, item) => sum + item.quantity, 0)
    });
  } catch (err) {
    console.error("Error updating cart item:", err);
    res.status(500).json({
      success: false,
      error: "Failed to update cart item.",
      message: err.message
    });
  }
});

// Remove item from cart
router.delete("/remove/:service_id", async (req, res) => {
  const { service_id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(service_id)) {
  //   return res.status(400).json({
  //     success: false,
  //     error: "Invalid service_id format"
  //   });
  // }

  try {
    const cart = await Cart.findOne({ user_id: req.user.id });

    if (!cart) {
      return res.status(404).json({ success: false, error: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(item => item.service_id.toString() === service_id);

    if (itemIndex === -1) {
      return res.status(404).json({ success: false, error: "Item not found in cart" });
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();

    const updatedCart = await Cart.findOne({ user_id: req.user.id }).populate("items.service_id");

    res.json({
      success: true,
      message: "Item removed from cart",
      cart: updatedCart,
      itemCount: updatedCart.items.reduce((sum, item) => sum + item.quantity, 0)
    });
  } catch (err) {
    console.error("Error removing cart item:", err);
    res.status(500).json({
      success: false,
      error: "Failed to remove cart item.",
      message: err.message
    });
  }
});

// Clear entire cart
router.delete("/clear", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user.id });

    if (!cart) {
      return res.status(404).json({ success: false, error: "Cart not found" });
    }

    cart.items = [];
    await cart.save();

    res.json({
      success: true,
      message: "Cart cleared successfully",
      cart,
      itemCount: 0
    });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({
      success: false,
      error: "Failed to clear cart.",
      message: err.message
    });
  }
});

// Cart summary
router.get("/summary", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user.id });

    const itemCount = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
    const total = cart ? cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
    const savings = cart ? cart.items.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0) : 0;

    res.json({
      success: true,
      summary: { itemCount, total, savings }
    });
  } catch (err) {
    console.error("Error fetching cart summary:", err);
    res.status(500).json({
      success: false,
      error: "Failed to fetch cart summary.",
      message: err.message
    });
  }
});

module.exports = router;
