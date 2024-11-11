import { Router } from "express";
import {
  productInfo,

  getAllProduct,
  deleteProduct,
  getProduct,

} from "../controllers/product.category-controller";
const product = Router();

product.route("/product").post(productInfo);
product.route("/allproducts").get(getAllProduct);
product.route("/:id").delete(deleteProduct);
product.route("/:pId").get(getProduct);


export default product;
