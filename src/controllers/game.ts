import { Request, Response, NextFunction } from 'express';
import Game from '../models/game';
import { addGame, getTeamsOfGame } from '../services/game';

export const createGame = async (req: Request, res: Response, next: NextFunction) => {
    const game:Game = await addGame(req.body)
    return res.json(game)
}

export const getTeamOfGame = async (req: Request, res: Response, next: NextFunction) => {
    const id:string = req.params.id
    const teams:Game[] = await getTeamsOfGame(id)
    return res.json(
        teams
    )
}