import { Request, Response, NextFunction } from "express"

export const signUp = (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json({ message: "all field are required..." })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "invalid email" })
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()_+\-\=[\]{};':"\\|,.<>/?]{6,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "invalid password" })
    }

    next();

}

export const login = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email  || !password) {
        return res.status(400).json({ message: "all field are required..." })
    }

    next();

}