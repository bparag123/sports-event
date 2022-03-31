import Category from "../models/category"
import Game, { gameBody } from "../models/game"
import Team from "../models/team"
/**This is a Service for the Game Model Operations */

export const addGame = async (data: gameBody) => {
    try {
        return await Game.create(data)
    } catch (error: any) {
        return new Error(error.errors[0].message)
    }
}

export const findGameById = async (id: string) => {
    try {
        return await Game.findByPk(id)
    } catch (error: any) {
        return new Error(error.errors[0].message)
    }
}

export const removeGame = async (id: string) => {
    try {
        return await Game.destroy({
            where: { id: id }
        });
    } catch (error: any) {
        return new Error(error.errors[0].message)
    }
}


export const getTeamsOfGame = async (id: string) => {
    const game = await Team.findAll({
        where: {
            game_id: id
        },
        //**Joining the Game and Category model with Team */
        include: [
            { model: Game, attributes: ["id", "name"] },
            { model: Category, attributes: ["id", "name"] }],
            attributes:["id", "name", "createdAt", "updatedAt"]
    })
    return game
}