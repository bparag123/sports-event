import { UUIDV4, DataTypes, Model, Optional } from "sequelize";
import sequelize from '.';
import Category from "./category";
import Game from "./game";
export interface tournamentAttributes {
    id: string
    name: string
    game_id: string
    category_id: string
    organizer : string
    location : string
    start_date : Date
    end_date : Date
}

export interface tournamentBody extends Optional<tournamentAttributes, 'id'> { }


class Tournament extends Model<tournamentAttributes, tournamentBody> implements tournamentAttributes {
    declare id: string;
    declare name: string;
    declare game_id: string;
    declare category_id: string;
    declare start_date: Date;
    declare end_date: Date;
    declare location: string;
    declare organizer: string;
}
Tournament.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    game_id: {
        type: DataTypes.UUID,
        references: {
            model: Game,
            key: "id"
        }
    },
    category_id: {
        type: DataTypes.UUID,
        references: {
            model: Category,
            key: "id"
        }
    },
    start_date:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    end_date:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    },
    organizer:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, timestamps: true, modelName: "Tournament" })

export default Tournament