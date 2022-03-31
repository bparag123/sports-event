import { Request, Response, NextFunction, RequestHandler } from 'express';
import Category from '../models/category';
import { addCategory, getTeamsOfCategory } from '../services/category';

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    const category:Category|Error = await addCategory(req.body)
    if(category instanceof Error){
        return next(category)
    }
    return res.json(category)
}

export const getTeamOfCategory = async (req: Request, res: Response, next: NextFunction) => {
    const id:string = req.params.id
    const teams:Category[] = await getTeamsOfCategory(id)
    return res.json(
        teams
    )
}