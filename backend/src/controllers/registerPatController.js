const registerPatController = {};
import Patient from "../models/Patients.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {config} from "../config.js";

//Insert - Post
registerPatController.registerPatient = async (req, res) => {
    const {name, age, email, password, phoneNumber, isVerified} = req.body;

    try {
        //Existing Patient
        const exists = await Patient.findOne({email});
        if (exists){
            res.json({message: "Patient Already Exists"});
        }

        //Encrypt Password
        const passwordHash = await bcrypt.hash(password, 10);

        //Save Doctor
        const newPatient = new Doctor({
            name, 
            age, 
            email, 
            password: passwordHash, 
            phoneNumber, 
            isVerified
        });
        await newPatient.save();

        //Generate verification code
        const verificationCode = crypto.randomBytes(3).toString("hex");

        //Token Generator
        const tokenCode = jwt.sign(
            {email, verificationCode},
            config.JWT.secret,
            {expiresIn: "2h"}
        );

        //Cookie
        res.cookie("VerificationToken", tokenCode, {maxAge: 2*60*60*1000});

        //Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.email_user,
                pass: config.email.email_pass
            }
        });

        //Receipient
        const mailOptions = {
            from: config.email.email_user,
            to: email,
            subject: "Email Verification",
            text: `Your account was successfully registered.
            For safety reasons, please verify your Email using the code below:
            
            Verification Code: ${verificationCode}
            This code Expires in 2 hours.
            Please don't share this code.

            Hola jaja

            `
        }

        //Sending
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return res.json({message: "Error"})
            console.log("Email Sent")
        });

        res.json({message: "Register Successful. Please verify your email with the code sent via Email"})

    } 
    catch (error) {
        console.log(error);
        res.json({message: "Registration Failed"});
    }
};

//Verify code
registerPatController.verifyCodeEmail = async (req, res) => {
    const {verificationCode} = req.body;
    const token = req.cookies.VerificationToken;

    try {
        //Verify and decode
        const decoded = jwt.verify(token, config.JWT.secret)
        const {email, verificationCode: storedCode} = decoded;

        //Compare code
        if (verificationCode !== storedCode){
            return res.json({message: "Invalid Code"})
        }

        //isVerified Value
        const patient = await patientsModel.findOne({email});
        patient.isVerified = true;
        await patient.save();
        res.json({message: "Email Verified Successfully"});

        //Clear Cookie
        res.clearCookie("VerificationToken");

    }
    catch (error) {
        res.json({message: "Error"})
    };
};

//Export
export default registerPatController;