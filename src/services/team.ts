import Category from "../models/category";
import Game from "../models/game";
import Team, { teamBody } from "../models/team"
import User from "../models/user"
/**This is a Service for the Team Model Operations */

export const addTeam = async (data: teamBody) => {
    try {
        return await Team.create(data)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
}

export const findTeamById = async (id: string) => {
    try {
        return await Team.findByPk(id)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
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
        //**Joining the User, Game, Category with Team Table */
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