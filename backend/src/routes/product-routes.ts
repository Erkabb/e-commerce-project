import { Router } from "express";
import {
  productInfo,
  ClassOfProducts,
  getAllProduct,
  deleteProduct,
} from "../controllers/product.category-controller";
const productandclasslistRouter = Router();

productandclasslistRouter.route("/product").post(productInfo);
productandclasslistRouter.route("/category").post(ClassOfProducts);
productandclasslistRouter.route("/allproducts").get(getAllProduct);
productandclasslistRouter.route("/:id").delete(deleteProduct);

export default productandclasslistRouter;
