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
exports.removeProduct = exports.addProducts = exports.getProducts = void 0;
// Adding Query
const intex_1 = require("../../database/intex");
// Get All Products From DB
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield (0, intex_1.query)("SELECT * FROM store_products", []);
        res.json({
            status: true,
            msg: "send success",
            products: rows
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            status: true,
            msg: "There was an error : " + error
        });
    }
});
exports.getProducts = getProducts;
// Add New Procuts to DB
const addProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { currentProducts } = req.body;
        console.log(currentProducts[0]);
        currentProducts.forEach((product) => __awaiter(void 0, void 0, void 0, function* () {
            const { id, photo, title, text, price, discounted_price } = product;
            const priceData = parseFloat(price);
            const discountedPriceData = parseFloat(discounted_price);
            console.log(priceData, " ", discountedPriceData);
            if (photo)
                if (discounted_price)
                    yield (0, intex_1.query)("INSERT INTO store_products (id,photo,title,text,price,discounted_price) VALUES($1,$2,$3,$4,$5,$6)", [id, photo, title, text, priceData, discountedPriceData]);
                else
                    yield (0, intex_1.query)("INSERT INTO store_products (id,photo,title,text,price) VALUES($1,$2,$3,$4,$5)", [id, photo, title, text, priceData]);
            else if (discounted_price)
                yield (0, intex_1.query)("INSERT INTO store_products (id,title,text,price,discounted_price) VALUES($1,$2,$3,$4,$5)", [id, title, text, priceData, discountedPriceData]);
            else
                yield (0, intex_1.query)("INSERT INTO store_products (id,title,text,price) VALUES($1,$2,$3,$4)", [id, title, text, priceData]);
        }));
        const { rows } = yield (0, intex_1.query)("SELECT * FROM store_products", []);
        res.json({
            status: true,
            msg: "add product success",
            rows
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            status: false,
            msg: "There was an error : " + error,
        });
    }
});
exports.addProducts = addProducts;
//Remove Product From DB
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield (0, intex_1.query)(`DELETE FROM store_products WHERE id = $1`, [id]);
        const { rows } = yield (0, intex_1.query)("SELECT * FROM store_products", []);
        res.json({
            status: true,
            msg: "remove product success",
            rows
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            status: false,
            msg: "Ther was an error :" + error,
        });
    }
});
exports.removeProduct = removeProduct;
