import { UUIDV4 , DataTypes, Model, Optional} from "sequelize";
import sequelize from '.';
import Player from "./player";
import Team from "./team";
import User from "./user";
export interface TWPAttributes {
    id: string
    team_id: string
    player_id: string
    
}

export interface TWPBody extends Optional<TWPAttributes, 'id'> {}

class TeamWithPlayer extends Model<TWPAttributes, TWPBody> implements TWPAttributes {
    declare id: string;
    declare team_id: string
    declare player_id: string
}
TeamWithPlayer.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    
    team_id:{
        type: DataTypes.UUID,
        references:{
            model: Team,
            key: "id"
        },
        unique:"playerWithTeam"
    },
    player_id:{
        type: DataTypes.UUID,
        references:{
            model: User,
            key: "id"
        },
        unique:"playerWithTeam"
    }
}, { sequelize, timestamps: true, modelName: "Team_With_Player" })

export default TeamWithPlayer