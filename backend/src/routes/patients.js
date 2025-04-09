//Import
import express from "express";
import patientsController from "../controllers/patientsController.js";

//Router
const router = express.Router();

//Select
router.route("/")
    .get(patientsController.getPatients);

//Update and Delete
router.route("/:id")
    .put(patientsController.updatePatient)
    .delete(patientsController.deletePatient);

//Export
export default router;