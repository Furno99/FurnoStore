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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUsernameValid = exports.isEmailValid = exports.createUniqueID = exports.comparePasswords = exports.hashPassword = void 0;
// Packages
const intex_1 = require("./intex");
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
// Implementing Functions
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () { return yield bcrypt_1.default.hash(password, 10); }); //Returns bcrypted password for user
exports.hashPassword = hashPassword;
const comparePasswords = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () { return yield bcrypt_1.default.compare(password, hashedPassword); }); // Compares the original password and the hashed one if same returns true
exports.comparePasswords = comparePasswords;
const createUniqueID = () => (0, uuid_1.v4)(); // creates unique ID for users
exports.createUniqueID = createUniqueID;
const isEmailValid = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailData = (yield (0, intex_1.query)("SELECT email FROM furnouser WHERE email = $1", [email])).rows[0];
        if (emailData)
            return false;
        else
            return true;
    }
    catch (error) {
        console.log("Problem on checking the validation of email : ", error);
        return false;
    }
});
exports.isEmailValid = isEmailValid;
const isUsernameValid = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usernameData = (yield (0, intex_1.query)("SELECT username FROM furnouser WHERE username = $1", [username])).rows[0];
        if (usernameData)
            return false;
        else
            return true;
    }
    catch (error) {
        console.log("Problem on checking username : ", error);
        return false;
    }
});
exports.isUsernameValid = isUsernameValid;
