"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./modules/countries/router"));
const mongo_1 = __importDefault(require("./utils/mongo"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(router_1.default);
(0, mongo_1.default)()
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
app.listen(6060, () => console.log(':6060'));
