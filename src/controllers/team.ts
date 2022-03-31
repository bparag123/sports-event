import { Request, Response, NextFunction } from 'express';
import Team from '../models/team';
import {addTeam, getTeamData } from '../services/team';
import { addPlayerToTeam, removePlayer , } from '../services/teamWithPlayer';
export const createTeam = async (req: Request, res: Response, next: NextFunction) => {
    const team:Team|Error = await addTeam(req.body)
    if(team instanceof Error){
        return next(team)
    }
    return res.json(team)
}

export const getTeamDetails = async (req: Request, res: Response, next: NextFunction) => {
    const id:string = req.params.id
    const team:Team[] = await getTeamData(id)
    return res.json(
        team
    )
}

export const addPlayer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result:string = await addPlayerToTeam(req.body)
        return res.json({
            message: result
        })
    } catch (error:any) {
        return res.json({
            message: error
        })
    }
}

export const removePlayerFromTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result:string = await removePlayer(req.body)
        return res.json({
            message: result
        })
    } catch (error: any) {
        return res.json({
            message: error
        })
    }
}