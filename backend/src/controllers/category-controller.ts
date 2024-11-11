import { Category } from "../models/category.model";
import Product from "../models/products.model";
import { Request, Response } from "express";

export const ClassOfProducts = async (req: Request, res: Response) => {
    try {
      const {season, material, size} = req.body;
      const createCategory = await Category.create({
        season:season, material:material, size:size,
      });
      res.status(202).json({ message: "category added", class: createCategory });
    } catch (error) {
      res.status(404).json({ message: "Failed", error: error });
    }
  };
  export const getAllCategories = async (req: Request, res: Response) => {
     
    try {
        const category = await Category.find({});
      res.status(200).json({ message: "Category", category });
  } catch (error) {
      res.status(400).json({ message: "Catergory failed", error });
  }
  };