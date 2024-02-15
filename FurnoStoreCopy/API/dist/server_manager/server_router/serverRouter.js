"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defining the Compiler
const express_1 = require("express");
const router = (0, express_1.Router)();
// Adding Routers
const registerRouter_1 = require("../routes/registerRouter");
const loginRouter_1 = require("../routes/loginRouter");
const adminRouter_1 = require("../routes/adminRouter");
// Routes
router.use("/register", registerRouter_1.registerRouter);
router.use("/login", loginRouter_1.loginRouter);
router.use("/admin", adminRouter_1.adminRouter);
exports.default = router;
