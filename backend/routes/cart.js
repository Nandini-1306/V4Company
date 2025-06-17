const express = require("express");
const router = express.Router();
const Cart = require("../models/cartModel");
const auth = require("../middleware/auth");

router.use(auth);

// GET Cart
router.get("/", async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
      await cart.save();
    }
    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to get cart", error: err.message });
  }
});

// Add to cart
router.post("/add", async (req, res) => {
  const { service_id, name, price, originalPrice, quantity } = req.body;

  if (!service_id || !name || price == null || originalPrice == null || quantity == null) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({ userId: req.user.id, items: [] });
    }

    const existing = cart.items.find(
      (item) => item.service_id.toString() === service_id
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.items.push({ service_id, name, price, originalPrice, quantity });
    }

    await cart.save();
    res.status(200).json({ cart });
  } catch (err) {
    console.error("Cart Add Error:", err); // 👈 this will show in terminal
    res.status(500).json({ message: "Failed to add item", error: err.message });
  }
});


// Update quantity
router.patch("/update/:serviceId", async (req, res) => {
  const { quantity } = req.body;
  const { serviceId } = req.params;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(item => item.service_id === serviceId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({ cart });
  } catch (err) {
    console.error("update error ", err)
    res.status(500).json({ message: "Failed to update quantity", error: err.message });
  }
});

// Remove item
router.delete("/remove/:serviceId", async (req, res) => {
  const { serviceId } = req.params;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => item.service_id.toString() !== serviceId);
    await cart.save();

    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json({ message: "Failed to remove item", error: err.message });
  }
});

// Clear cart
router.delete("/clear", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    res.status(200).json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ message: "Failed to clear cart", error: err.message });
  }
});

module.exports = router;
