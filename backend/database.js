//Mongoose
import mongoose, { mongo } from "mongoose";

import {config} from "./src/config.js";

//Connection
mongoose.connect(config.db.URI);

//Validation
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB Is Online");
});

connection.on("disconnected", () => {
    console.log("DB Is Offline");
});

connection.on("error", (error) => {
    console.log("Database Error: " + error);
});