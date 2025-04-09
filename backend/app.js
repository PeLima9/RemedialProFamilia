//Imports
import express from "express";
import cookieParser from "cookie-parser";
import doctorsRoutes from "./src/routes/doctors";
import registerDocRoutes from "./src/routes/registerDoctors.js";

//Express
const app = express();

//.json Middleware
app.use(express.json());

//Cookies
app.use(cookieParser());

//Doctors Routes
app.use("/api/doctors", doctorsRoutes);
app.use("/api/registerDoctors", registerDocRoutes);

//Patients Routes


//Appointments Routes


export default app;