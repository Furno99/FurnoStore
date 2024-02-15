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
exports.registerUser = void 0;
const databaseFunctions_1 = require("../../database/databaseFunctions");
const intex_1 = require("../../database/intex");
const databaseFunctions_2 = require("../../database/databaseFunctions");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, username, email, password } = req.body;
    const hashedPassword = yield (0, databaseFunctions_1.hashPassword)(password);
    if (yield (0, databaseFunctions_2.isEmailValid)(email)) {
        if (yield (0, databaseFunctions_1.isUsernameValid)(username)) {
            try {
                yield (0, intex_1.query)("INSERT INTO furno_user (id,first_name,last_name,username,email,password) VALUES (uuid_generate_v4(),$1,$2,$3,$4,$5)", [first_name, last_name, username, email, hashedPassword]);
                res.json({
                    status: true,
                    msg: "The user has been successfuly created",
                    user: {
                        username,
                        email,
                    }
                });
            }
            catch (error) {
                console.log(error);
                res.json({
                    status: false,
                    msg: "Failed creating the user : " + error,
                });
            }
        }
        else {
            res.json({
                status: false,
                msg: "Failed creating the user : This username is already used.",
                problem: username
            });
        }
    }
    else {
        res.json({
            status: false,
            msg: "Failed creating the user : This email is already used.",
            problem: email
        });
    }
});
exports.registerUser = registerUser;
