import { Router } from "express";
import {
    ClassOfProducts, getAllCategories
} from "../controllers/category-controller";

const catRouter = Router();

catRouter.route("/createcat").post(ClassOfProducts);
catRouter.route("/category").get(getAllCategories);

export default catRouter;