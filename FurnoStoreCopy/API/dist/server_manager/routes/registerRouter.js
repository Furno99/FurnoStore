"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const express_1 = require("express");
const registerController_1 = require("../controllers/registerController");
exports.registerRouter = (0, express_1.Router)();
exports.registerRouter.post("/", registerController_1.registerUser);
