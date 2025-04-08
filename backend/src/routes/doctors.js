//Import
import express from "express";
import doctorsController from "../controllers/doctorsController.js";

//Router
const router = express.Router();

//Select
router.route("/")
    .get(doctorsController.getDoctors);

//Update and Delete
router.route("/:id")
    .put(doctorsController.updateDoctor)
    .delete(doctorsController.deleteDoctor);

//Export
export default router;