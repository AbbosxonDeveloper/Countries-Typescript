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
const model_1 = __importDefault(require("./model"));
exports.default = {
    Get: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const countries = yield model_1.default.find();
            res.send(countries);
        }
        catch (error) {
            next(error);
        }
    }),
    Post: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newCountry = new model_1.default(req.body);
            if (!newCountry) {
                throw new Error('post error');
            }
            res.status(201).send({
                status: 201,
                message: "Created",
                data: yield newCountry.save()
            });
        }
        catch (error) {
            next(error);
        }
    }),
    Put: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { _id } = req.params;
            const { title, capital, population, area, created } = req.body;
            const updateCountry = model_1.default.updateMany({ _id: _id }, { title, capital, population, area, created })
                .catch((err) => { throw new Error(err); });
            if (!updateCountry) {
                throw new Error('post error');
            }
            res.status(201).send({
                status: 201,
                message: "Updated",
                data: { title, capital, population, area, created }
            });
        }
        catch (error) {
            next(error);
        }
    }),
    Delete: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { _id } = req.params;
            const deleteCountry = model_1.default.deleteOne({ _id: _id })
                .catch((err) => { throw new Error(err); });
            if (!deleteCountry) {
                throw new Error('post error');
            }
            res.status(201).send({
                status: 201,
                message: "Deleted",
                data: deleteCountry
            });
        }
        catch (error) {
            next(error);
        }
    })
};
