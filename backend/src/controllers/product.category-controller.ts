import { Request, Response } from "express";

import Product from "../models/products.model";
import { Category } from "../models/category.model";

export const ClassOfProducts = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const createCategory = await Category.create({
      name,
      description,
    });
    res.status(202).json({ message: "category added", class: createCategory });
  } catch (error) {
    res.status(404).json({ message: "Failed", error: error });
  }
};

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
  const product = await Product.find({}).populate("category");
  res.status(201).json({ product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.body;
  const data = await Product.deleteOne(id);
  res.status(201).json({ data });
};

export const getProduct = async (req: Request, res: Response) => {
  const { pId } = req.params;
  try {
    const product = await Product.findById(pId);
    res.status(200).json({ message: "success", product });
  } catch (error) {
    res.status(400).json({ message: '"failed' });
  }
};
