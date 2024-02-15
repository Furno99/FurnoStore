"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const intex_1 = require("../../database/intex");
const databaseFunctions_1 = require("../../database/databaseFunctions");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userData = (yield (0, intex_1.query)("SELECT * FROM furno_user WHERE email = $1 ", [email])).rows[0];
    if (userData) {
        if (yield (0, databaseFunctions_1.comparePasswords)(password, userData.password)) {
            res.json({
                status: true,
                msg: "Login successful",
                user: {
                    email
                }
            });
        }
        else {
            res.json({
                status: false,
                msg: "Problem on login : Wrong password"
            });
        }
    }
    else {
        res.json({
            status: false,
            msg: "Problem on login : Invalid email"
        });
    }
});
exports.loginUser = loginUser;
