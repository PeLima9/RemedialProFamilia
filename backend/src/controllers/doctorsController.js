const doctorsController = {};
import doctorsModel from "../models/Doctors.js";

//Select / Get
doctorsController.getDoctors = async(req, res) => {
    const doctors = await doctorsModel.find();
    res.json(doctors);
};

//Delete
doctorsController.deleteDoctor = async (req, res) => {
    await doctorsModel.findByIdAndDelete(req.params.id);
    res.json({message: "Doctor Removed"});
};

//Update / Put
doctorsController.updateDoctor = async (req, res) => {
    const {name, specialty, email, password} = req.body;
    const updateDoctor = await doctorsModel.findByIdAndUpdate(req.params.id, {name, specialty, email, password}, {new: true});
    res.json({message: "Doctor Updated"});
};

//Export
export default doctorsController;