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
