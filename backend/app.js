//Imports
import express from "express";
import cookieParser from "cookie-parser";

//Express
const app = express();

//.json Middleware
app.use(express.json());

//Cookies
app.use(cookieParser());

//Routes


export default app;