import { addUser, findUserById, loginUser, removeUser } from "../services/user";
import { Request, Response, NextFunction } from 'express';
import User from "../models/user";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const user:User = await addUser(req.body)
    return res.json(user)
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result:string = await loginUser(req.body)
        return res.json({
            message: result
        })
    } catch (error: any) {
        return res.json({
            message: error
        })
    }
}