
import { getProducts , addProducts, removeProduct } from "../controllers/adminController";

import { Router } from "express";

export const adminRouter = Router()

adminRouter.get("/getProducts",getProducts)
adminRouter.post("/addProducts",addProducts)
adminRouter.post("/removeProduct",removeProduct)
