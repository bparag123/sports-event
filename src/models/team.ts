import { UUIDV4, DataTypes, Model, Optional } from "sequelize";
import sequelize from '.';
import Category from "./category";
import Game from "./game";
export interface teamAttributes {
    id: string
    name: string
    game_id: string
    category_id: string
}

export interface teamBody extends Optional<teamAttributes, 'id'> { }


class Team extends Model<teamAttributes, teamBody> implements teamAttributes {
    declare id: string;
    declare name: string;
    declare game_id: string;
    declare category_id: string;
}
Team.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "teamOfGame"
    },
    //Here game_id and category_id is composite key
    game_id: {
        type: DataTypes.UUID,
        references: {
            model: Game,
            key: "id"
        },
        unique: "teamOfGame"
    },
    category_id: {
        type: DataTypes.UUID,
        references: {
            model: Category,
            key: "id"
        },
        unique: "teamOfGame"
    }
}, { sequelize, timestamps: true, modelName: "Team" })

export default Team