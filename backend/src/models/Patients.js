/*
    Fields:
        name
        age
        email
        password
        phoneNumber
        isVerified
*/

//Mongoose
import {Schema, model} from "mongoose";

//Schema
const patientsSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 50
    },

    age: {
        type: Number,
        require: true,
        min: 0
    },

    email: {
        type: String,
        require: true,
        maxLength: 50
    },

    password: {
        type: String,
        require: true
    },

    phoneNumber: {
        type: String,
        require: true,
        maxLength: 8
    },

    isVerified: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

//Export
export default model("Patients", patientsSchema);