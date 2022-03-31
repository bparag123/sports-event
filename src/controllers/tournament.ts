import { Request, Response, NextFunction } from 'express';
import Tournament from '../models/tournament';
import { addTeamToTournament } from '../services/teamsOfTournament';
import { createTournament, getTournamentData } from '../services/tournament';

export const addTournament = async (req: Request, res: Response, next: NextFunction) => {
    const tournament:Tournament|Error = await createTournament(req.body)
    if(tournament instanceof Error){
        return next(tournament)
    }
    return res.json(tournament)
}

export const getTournamentDetails = async (req: Request, res: Response, next: NextFunction) => {
    const id:string = req.params.id
    const tournament:Tournament[] = await getTournamentData(id)
    return res.json(
        tournament
    )
}

export const addTeamInTournament = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result:string = await addTeamToTournament(req.body)
        return res.json({
            message: result
        })
    } catch (error: any) {
        return res.json({
            message: error
        })
    }
}