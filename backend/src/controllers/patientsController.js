const patientsController = {};
import patientsModel from "../models/Patients.js";

//Select / Get
patientsController.getPatients = async(req, res) => {
    const patients = await patientsModel.find();
    res.json(patients);
};

//Delete
patientsController.deletePatient = async (req, res) => {
    await patientsModel.findByIdAndDelete(req.params.id);
    res.json({message: "Patient Removed"});
};

//Update / Put
patientsController.updatePatient = async (req, res) => {
    const {name, age, email, password, phoneNumber, isVerified} = req.body;
    const updatePatient = await patientsModel.findByIdAndUpdate(req.params.id, {name, age, email, password, phoneNumber, isVerified}, {new: true});
    res.json({message: "Patient Updated"});
};

//Export
export default patientsController;