import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from "./controllers/users/users-controllers.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(4000);