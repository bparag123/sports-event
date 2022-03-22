import Category from "../models/category";
import Game from "../models/game";
import Team, { teamBody } from "../models/team"
import User from "../models/user"

export const addTeam = async (data: teamBody) => {
    console.log(data);
    return await Team.create(data)
}

export const findTeamById = async (id: string) => {
    return await Team.findByPk(id)
}

export const removeTeam = async (id: string) => {
    return await Team.destroy({
        where: { id: id }
    });
}



export const getTeamData = async (id: string) => {
    const team = await Team.findAll({
        where: {
            id: id
        },
        include: [
            {
                model: User, attributes: ["email", "id"],
                through: {
                    attributes: []
                }
            },
            { model: Game, attributes: ["id", "name"] },
            { model: Category, attributes: ["id", "name"] }
        ],
        attributes: ["id", "name"]
    })
    return team
}