import Category from "../models/category"
import Game, { gameBody } from "../models/game"
import Team from "../models/team"

export const addGame = async (data: gameBody) => {
    return await Game.create(data)
}

export const findGameById = async (id: string) => {
    return await Game.findByPk(id)
}

export const removeGame = async (id: string) => {
    return await Game.destroy({
        where: { id: id }
    });
}


export const getTeamsOfGame = async (id:string) =>{
    const game = await Team.findAll({
        where:{
            game_id: id
        },
        include: [
        { model: Game, attributes: ["id", "name"] },
        { model: Category, attributes: ["id", "name"] }]
    })
    return game
}