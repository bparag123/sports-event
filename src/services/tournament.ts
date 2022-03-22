import Category from "../models/category"
import Game from "../models/game"
import Team from "../models/team"
import Tournament, { tournamentBody } from "../models/tournament"

export const createTournament = async (data: tournamentBody) => {
    data.start_date = new Date(data.start_date)
    data.end_date = new Date(data.end_date)
    return await Tournament.create(data)
}

export const findTournamentById = async (id: string) => {
    return await Tournament.findByPk(id)
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