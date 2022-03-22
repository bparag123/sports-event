import { UUIDV4 , DataTypes, Model, Optional} from "sequelize";
import sequelize from '.';
import Player from "./player";
export interface userAttributes {
    id: string,
    email: string,
    password: string
}

export interface userBody extends Optional<userAttributes, 'id'> {}


class User extends Model<userAttributes, userBody> implements userAttributes {
    declare id: string;
    declare email: string;
    declare password: string;
}
User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { sequelize, timestamps: true, modelName: "User" })

export default User