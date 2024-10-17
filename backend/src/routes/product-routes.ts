import { Router } from "express";
import {
  productInfo,
  ClassOfProducts,
  getAllProduct,
  deleteProduct,
  getProduct,
  getAllCategories,
} from "../controllers/product.category-controller";
const product = Router();

product.route("/product").post(productInfo);
product.route("/category").post(ClassOfProducts);
product.route("/allproducts").get(getAllProduct);
product.route("/:id").delete(deleteProduct);
product.route("/:pId").get(getProduct);
product.route("/get-category").get(getAllCategories);

export default product;
