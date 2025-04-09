//Imports
import express from "express";
import registerDocController from "../controllers/registerDocController.js";

//Router
const router = express.Router();

//Insert - Put
router.route("/").post(registerDocController.registerDoctor);

//Export
export default router;