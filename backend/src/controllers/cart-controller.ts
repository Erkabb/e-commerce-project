import { Request, Response } from "express";
import Cart from "../models/cart.model";
import Product from "../models/products.model";

export const createCart = async (req: Request, res: Response) => {
  const { user, productId, name, price, description, size, images, color, soldQuantity, totalQuantity, discount, category, totalAmount } = req.body;

  try {
    const userCart = await Cart.findOne({ user });

    if (!userCart) {
      const newCart = await Cart.create({
        user,
        productId,
        products: [{ name, price, description, size, images, color, soldQuantity, totalQuantity, discount, category }],
        totalAmount,
      });
      return res.status(200).json({
        message: "Created new cart",
        cart: newCart,
      });
    }

    const findProduct= await Product.findById(productId);
    if(findProduct){
      const productIdx = userCart.products.findIndex(
        (item) => item._id.toString() === productId.toString()
      );
      if (productIdx > -1) {
        userCart.products[productIdx].soldQuantity += soldQuantity;
      }
    }

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
      cart: userCart ,
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
      (item) => item._id.toString() === pid
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
