"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
exports.default = (0, express_1.Router)()
    .get('/countries', controller_1.default.Get)
    .post('/countries/post', controller_1.default.Post)
    .put('/countries/change/:_id', controller_1.default.Put)
    .delete('/countries/delete/:_id', controller_1.default.Delete);
