"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const adminController_1 = require("../controllers/adminController");
const express_1 = require("express");
exports.adminRouter = (0, express_1.Router)();
exports.adminRouter.get("/getProducts", adminController_1.getProducts);
exports.adminRouter.post("/addProducts", adminController_1.addProducts);
exports.adminRouter.post("/removeProduct", adminController_1.removeProduct);
