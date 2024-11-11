import { Request, Response } from "express";

import Product from "../models/products.model";
import { Category } from "../models/category.model";


export const productInfo = async (req: Request, res: Response) => {
  try {
    const { name, description, price, size, images, quantity, category } =
      req.body;
    const createProduct = await Product.create({
      name,
      description,
      price,
      size,
      images,
      quantity,
      category,
    });
    res
      .status(201)
      .json({ message: "Product created", product: createProduct });
  } catch (error) {
    res.status(404).json({ message: "Failed", error: error });
  }
};
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "Got all products", products: products });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.body;
  const data = await Product.deleteOne(id);
  res.status(201).json({ data });
};

export const getProduct = async (req: Request, res: Response) => {
  const { pId } = req.params;
  console.log("pId", pId);
  try {
    const product = await Product.findById(pId).populate("category");
    res.status(200).json({ message: "success", product: product });
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({ message: "failed" });
  }
};

