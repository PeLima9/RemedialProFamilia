//Imports
import express from "express";
import cookieParser from "cookie-parser";
import doctorsController from "./src/controllers/doctorsController.js";

//Express
const app = express();

//.json Middleware
app.use(express.json());

//Cookies
app.use(cookieParser());

//Clients Routes
app.use("/api/doctors", doctorsController);


//Doctors Routes


//Appointments Routes


export default app;