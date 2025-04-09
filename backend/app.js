//Imports
import express from "express";
import cookieParser from "cookie-parser";

//Doctors
import doctorsRoutes from "./src/routes/doctors";
import registerDocRoutes from "./src/routes/registerDoctors.js";

//Patients
import patientsRoutes from "./src/routes/patients.js";
import registerPatRoutes from "./src/routes/registerPatients.js";

//Appointments


//Login


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
app.use("/api/patients", patientsRoutes);
app.use("/api/registerPatients", registerPatRoutes);

//Appointments Routes


//Login


export default app;