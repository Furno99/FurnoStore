"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Adding packages
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const serverRouter_1 = __importDefault(require("../server_manager/server_router/serverRouter"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// Creating Server App
const app = (0, express_1.default)();
const port = process.env.PORT;
const API = process.env.ReqServerAPI;
const corsOptions = {
    origin: API,
};
// Configuring App
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
// Router
app.use("/api/v1/furno", serverRouter_1.default);
app.listen(port, () => console.log(`The server is listening on port : ${port}`));
