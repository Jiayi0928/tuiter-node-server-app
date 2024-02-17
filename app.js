import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import HelloController from './controllers/hello-controller.js';
import UserController from "./controllers/users/users-controllers.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import "./config.js";

// const CONNECTION_STRING = "mongodb+srv://fullstack:123@cluster0.psq34.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(4000);