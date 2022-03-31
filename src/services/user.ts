import User, { userBody } from "../models/user"
/**This is a Service for the User Model Operations */

export const addUser = async (data: userBody) => {
    try {
        return await User.create(data)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
}

export const findUserById = async (id: string) => {
    try {
        return await User.findByPk(id)
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
    
}

export const removeUser = async (id: string) => {
    try {
        return await User.destroy({
            where: { id: id }
        });
    } catch (error:any) {
        return new Error(error.errors[0].message)
    }
    
}

export const loginUser = async (creadential: userBody)=>{
    
    const user = await User.findOne({
        where: {
            email: creadential.email
        }
    })
    if(user===null){
        return Promise.reject("User not found")
    }
    if(user.password !== creadential.password){
        return Promise.reject("Invalid Password")
    }
    return Promise.resolve("Login Sucessfull")
}