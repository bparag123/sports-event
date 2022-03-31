import Category, { categoryBody } from "../models/category"
import Team from "../models/team"

export const addCategory = async (data: categoryBody) => {
    try {
        return await Category.create(data)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
}

export const findCategoryById = async (id: string) => {
    try {
        return await Category.findByPk(id)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
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