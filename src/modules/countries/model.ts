import { Schema, Types, model } from "mongoose";

const CountrySchema = new Schema({
    id: {
        type: Types.ObjectId
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
},
{
    collection: <string>'country'
})

export default model('Country', CountrySchema)