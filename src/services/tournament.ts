import Category from "../models/category"
import Game from "../models/game"
import Team from "../models/team"
import Tournament, { tournamentBody } from "../models/tournament"
/**This is a Service for the Tournament Model Operations */

export const createTournament = async (data: tournamentBody) => {
    data.start_date = new Date(data.start_date)
    data.end_date = new Date(data.end_date)
    try {
        return await Tournament.create(data)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
}

export const findTournamentById = async (id: string) => {
    try {
        return await Tournament.findByPk(id)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
}

export const removeTournament = async (id: string) => {
    return await Tournament.destroy({
        where: { id: id }
    });
}

export const getTournamentData = async (id: string) => {
    const tournament = await Tournament.findAll({
        where: {
            id: id
        },
        /** Joining the Team, Game and Category table with Tournament Table */
        include: [
            {model:Team, through:{
                attributes:[]
            }, attributes:["id", "name"]},
            {model:Game, attributes:["name", "id"]},
            {model:Category, attributes:["name", "id"]}
        ],
        attributes:["name", "organizer", "location", "start_date", "end_date"]
    })
    return tournament
}