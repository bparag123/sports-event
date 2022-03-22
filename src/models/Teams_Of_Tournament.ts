import { UUIDV4 , DataTypes, Model, Optional} from "sequelize";
import sequelize from '.';
import Team from "./team";
import Tournament from "./tournament";
export interface TOTAttributes {
    id: string
    team_id: string
    tournament_id: string
    
}

export interface TOTBody extends Optional<TOTAttributes, 'id'> {}

class TeamsOfTournament extends Model<TOTAttributes, TOTBody> implements TOTAttributes {
    declare id: string;
    declare team_id: string
    declare tournament_id: string
}
TeamsOfTournament.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    //Here team_id and tournament_id is composite key
    team_id:{
        type: DataTypes.UUID,
        references:{
            model: Team,
            key: "id"
        },
        unique:"teamsOfTournament"
    },
    tournament_id:{
        type: DataTypes.UUID,
        references:{
            model: Tournament,
            key: "id"
        },
        unique:"teamsOfTournament"
    }
}, { sequelize, timestamps: true, modelName: "Teams_Of_Tournament" })

export default TeamsOfTournament