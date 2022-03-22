import User, { userBody } from "../models/user"

export const addUser = async (data: userBody) => {
    return await User.create(data)
}

export const findUserById = async (id: string) => {
    return await User.findByPk(id)
}

export const removeUser = async (id: string) => {
    return await User.destroy({
        where: { id: id }
    });
}

export const loginUser = async (creadential: userBody)=>{
    console.log(creadential);
    const user = await User.findOne({
        where: {
            email: creadential.email
        }
    })
    console.log(user);
    if(user===null){
        return Promise.reject("User not found")
    }
    if(user.password !== creadential.password){
        return Promise.reject("Invalid Password")
    }
    return Promise.resolve("Login Sucessfull")
}