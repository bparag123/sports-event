import { UUIDV4 , DataTypes, Model, Optional} from "sequelize";
import sequelize from '.';
export interface gameAttributes {
    id: string,
    name: string
}
//This is for input data
export interface gameBody extends Optional<gameAttributes, 'id'> {}


class Game extends Model<gameAttributes, gameBody> implements gameAttributes {
    declare id: string;
    declare name: string;
}
Game.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize, timestamps: true, modelName: "Game" })

export default Game