import { UUIDV4 , DataTypes, Model} from "sequelize";
import sequelize from '.';
import User from "./user";
export interface playerAttributes {
    id: string,
    aadhar_number: number,
    mobile_number: number,
    birth_date: Date,
    user_id: string
}

export interface playerCreationAttributes {
    created_at: Date,
    updated_at: Date,
}

export interface playerBody {
    aadhar_number: number,
    mobile_number: number,
    birth_date: Date,
    user_id: string
}

class Player extends Model<playerAttributes, playerCreationAttributes> implements playerAttributes {
    declare id: string;
    declare aadhar_number: number;
    declare mobile_number: number;
    declare birth_date: Date;
    declare user_id: string;
}
Player.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    aadhar_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    mobile_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    birth_date:{
        type: DataTypes.DATEONLY,
        allowNull : false
    },
    user_id:{
        type: DataTypes.UUID,
        references:{
            model: User,
            key: "id"
        },
        unique: true,
        allowNull: false
    }
}, { sequelize, timestamps: true, modelName: "Player" })

export default Player