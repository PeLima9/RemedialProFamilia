const registerDocController = {};
import Doctor from "../models/Doctors.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {config} from "../config.js";

//Insert - Post
registerDocController.registerDoctor = async (req, res) => {
    const {name, specialty, email, password} = req.body;

    try {
        //Existing Doctor
        const exists = await Doctor.findOne({email});
        if (exists){
            res.json({message: "Doctor Already Exists"});
        }

        //Encrypt Password
        const passwordHash = await bcrypt.hash(password, 10);

        //Save Doctor
        const newDoctor = new Doctor({
            name, 
            specialty, 
            email, 
            password: passwordHash
        });
        await newDoctor.save();

        //Token Generator
        jwt.sign(
            {id: newDoctor._id},
            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},
            (error, token) => {
                if (error) console.log(error);
                res.cookie("AuthToken");
                res.json({message: "Doctor Saved"});
            }
        );
    } 
    catch (error) {
        console.log(error);
        res.json({message: "Registration Failed"});
    }
};

//Export
export default registerDocController;