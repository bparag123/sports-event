import { Request, Response, NextFunction } from 'express';
import Game from '../models/game';
import { addGame, getTeamsOfGame } from '../services/game';

export const createGame = async (req: Request, res: Response, next: NextFunction) => {
    const game:Game|Error = await addGame(req.body)
    if(game instanceof Error){
        return next(game)
    }
    return res.json(game)
}

export const getTeamOfGame = async (req: Request, res: Response, next: NextFunction) => {
    const id:string = req.params.id
    const teams:Game[] = await getTeamsOfGame(id)
    return res.json(
        teams
    )
}