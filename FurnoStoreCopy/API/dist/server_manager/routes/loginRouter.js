"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
//Controller
const loginController_1 = require("../controllers/loginController");
//Defining Router
const express_1 = require("express");
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.post("/", loginController_1.loginUser);
