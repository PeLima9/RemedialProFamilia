/*
    Fields:
        name
        specialty
        email
        password
*/

//Mongoose
import {Schema, model} from "mongoose";

//Schema
const doctorsSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 50
    },

    specialty: {
        type: String,
        require: true,
        maxLength: 25
    },

    email: {
        type: String,
        require: true,
        maxLength: 50
    },

    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

//Export
export default model("Doctors", doctorsSchema);