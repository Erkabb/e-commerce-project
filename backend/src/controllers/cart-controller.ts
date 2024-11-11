 import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, quantity } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });

    if (!findUserCart) {
      const cart = await Cart.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({
        message: "created new cart",
        cart,
      });
    }

    const findDuplicated = findUserCart.products.findIndex((item) => {
      item.product === productId;
    });

    if (!findUserCart) {
      res.status(400).json({ message: "user not found" });
    } else {
      if (findDuplicated > -1) {
        findUserCart.products[findDuplicated].quantity += quantity;
      }
      findUserCart.products.push({ product: productId, quantity });
    }

    const updatedCart = await findUserCart.save();
    res.status(200).json({
      message: "updated cart",
      updatedCart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to read carts",
    });
  }
};

export const getUsersCarts = async (req: Request, res: Response) => {
  const { id } = req.user;

  try {
    const usercarts = await Cart.findOne({ user: id }).populate(
      "products.product"
    );
    console.log("first", id);
    if (!usercarts) {
      res.status(400).json({ message: "failed to get carts" });
    } else {
      res
        .status(200)
        .json({ message: "Got all of the carts", usercarts: usercarts });
    }
  } catch (error) {
    console.log("couldn't get carts");
    res.status(400).json({ message: "failed to get carts" });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { uid, pid } = req.params;
  console.log("uid", uid);
  console.log("pid:", pid);
  try {
    const finduserId = await Cart.findOne({ user: uid });
    console.log("userid", finduserId);
    if (!finduserId) {
      res.status(400).json({ message: "cart not found" });
    }
    // const productIndex = finduserId.products.findIndex((item) => item.product.toString === pid);
  } catch (error) {
    res.status(400).json({ message: "couldn't delete cart", error });
  }
};

