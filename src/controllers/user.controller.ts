import { Request, Response } from "express"
import { USER } from "../interfaces/user.interface"

let users: USER[] = [];
class UserController {


    public createUser = async (req: Request, res: Response) => {
        try {
            // if user already exist with email as email is unique for all user

            const user = users.find(user => user.email == req.body.email);
            if (user) {
                return res.status(400).json({
                    message: "user already exists"
                });
            }

            // before save user we should hash password but currently we are saving pass in plan text

            let Newuser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }

            users.push(Newuser);

            /**
             * check console
             */
            console.log(users);


            res.status(201).json({
                message: "user created"
            });
        } catch (err: any) {
            return res.status(500).json({
                message: err?.message || "something went wrong"
            });
        }

    }


    public login = async (req: Request, res: Response) => {
        try {

            // check if user  email is valid
            const user = users.find(user => user.email == req.body.email);
            if (!user) {
                return res.status(401).json({
                    message: "invalid credientails"
                });
            }

            // now check the password
            if (user.password !== req.body.password) {
                return res.status(401).json({
                    message: "invalid credientails" // can send invalid credientails msg
                });
            }



            res.status(200).json({
                message: "login successfully",
                name: user.name
            });
        } catch (err: any) {
            return res.status(500).json({
                message: err?.message || "something went wrong"
            });
        }

    }
}

export default UserController;