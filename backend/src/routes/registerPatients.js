//Imports
import express from "express";
import registerPatController from "../controllers/registerPatController.js";

//Router
const router = express.Router();

//Insert - Put
router.route("/").post(registerPatController.registerPatient);

//Export
export default router;