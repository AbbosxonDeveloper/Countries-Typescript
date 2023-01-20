"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CountrySchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId
    },
    title: {
        type: String,
        require: true
    },
    capital: {
        type: String,
        require: true
    },
    population: {
        type: Number,
        require: true
    },
    area: {
        type: Number,
        require: true
    },
    created: {
        type: Number,
        require: true
    }
}, {
    collection: 'country'
});
exports.default = (0, mongoose_1.model)('Country', CountrySchema);
