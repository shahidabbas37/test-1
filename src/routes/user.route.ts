import { Router } from "express";
import UserController from "../controllers/user.controller";
import { login, signUp } from '../middlewares/user-validation';

const UserRoute = Router();
const controller = new UserController();

/**
 * create a new user
 */


UserRoute.post("/signup", signUp, controller.createUser);


/**
 * login  user
 */

UserRoute.post("/login", login, controller.login);


export default UserRoute;