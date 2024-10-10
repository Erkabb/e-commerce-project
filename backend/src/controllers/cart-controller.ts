import { Request, Response } from "express";
import Cart from "../models/cart.model";
import User from "../models/user.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, quantity } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });
    if (!findUserCart) {
      const createCart = await Cart.create({
        user: userId,
        products: {
          product: productId,
          quantity,
        },
        totalAmount,
      });
      return res
        .status(200)
        .json({ message: "User's cart created", createCart });
    }
    const findDuplicated = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );
    if (findDuplicated > -1) {
      findUserCart.products[findDuplicated].quantity += quantity;
    } else {
      findUserCart.products.push({ product: productId, quantity });
    }
    const updatedCart = await findUserCart.save();
    res.status(200).json({
      message: "updated cart",
      updatedCart,
    });
  } catch (error) {
    console.log("cart error:", error);
    res.status(400).json({ message: "failed to read cart" });
  }
};

export const getUsersCarts = async (req: Request, res: Response) => {
  const { id } = req.user;
  console.log("uid:", id);

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
    const userID = await Cart.findOne({ user: uid });
    console.log("userid", userID);
    if (!userID) {
      res.status(400).json({ message: "delete cart" });
    } else {
      const rmProduct = userID.deleteOne({ product: pid });
      console.log("product pid", pid);
      res.status(200).json({ message: "cart deleted", rm: rmProduct });
    }
  } catch (error) {
    res.status(400).json({ message: "couldn't delete cart", error });
  }
};
