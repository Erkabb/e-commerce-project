import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, soldQuantity } = req.body;

  try {
    const userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      const newCart = await Cart.create({
        user: userId,
        products: [{ product: productId, soldQuantity }],
        totalAmount,
      });
      return res.status(200).json({
        message: "Created new cart",
        cart: newCart,
      });
    }

    // Check for duplicate product
    const productIndex = userCart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex > -1) {
      // Update quantity of existing product
      userCart.products[productIndex].soldQuantity += soldQuantity;
    } else {
      // Add new product
      userCart.products.push({ product: productId, soldQuantity });
    }

    // Update total amount (optional: calculate based on product prices)
    userCart.totalAmount += totalAmount;

    const updatedCart = await userCart.save();

    return res.status(200).json({
      message: "Updated cart",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error creating/updating cart:", error);
    return res.status(500).json({
      message: "Failed to create or update cart",
    });
  }
};

export const getUsersCarts = async (req: Request, res: Response) => {
  const { id } = req.user;

  try {
    const userCart = await Cart.findOne({ user: id }).populate(
      "products.product"
    );

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.status(200).json({
      message: "Got user's cart",
      cart: userCart,
    });
  } catch (error) {
    console.error("Error getting cart:", error);
    return res.status(500).json({
      message: "Failed to get cart",
    });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { uid, pid } = req.params;

  try {
    const userCart = await Cart.findOne({ user: uid });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = userCart.products.findIndex(
      (item) => item.product.toString() === pid
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove product from cart
    userCart.products.splice(productIndex, 1);

    // Optional: Recalculate total amount
    // userCart.totalAmount = userCart.products.reduce(
    //   (total, item, idx) => total + Number(item.quantity) * item.product[idx].price, // Adjust based on product price structure
    //   0
    // );

    const updatedCart = await userCart.save();

    return res.status(200).json({
      message: "Removed product from cart",
      cart: updatedCart,
    });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return res.status(500).json({
      message: "Failed to delete product from cart",
    });
  }
};
