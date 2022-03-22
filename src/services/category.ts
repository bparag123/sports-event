import Category, { categoryBody } from "../models/category"
import Team from "../models/team"

export const addCategory = async (data: categoryBody) => {
    return await Category.create(data)
}

export const findCategoryById = async (id: string) => {
    return await Category.findByPk(id)
}

export const removeCategory = async (id: string) => {
    return await Category.destroy({
        where: { id: id }
    });
}


export const getTeamsOfCategory = async (id:string) =>{
    const game = await Category.findAll({
        where:{
            id: id
        },
        include: {
            model: Team,
            attributes:["name", "id"]
        }
    })
    return game
}