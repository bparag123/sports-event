"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const team_1 = __importDefault(require("./team"));
const user_1 = __importDefault(require("./user"));
class TeamWithPlayer extends sequelize_1.Model {
}
TeamWithPlayer.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true
    },
    //**Combination of team and player ids should be unique */
    team_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: team_1.default,
            key: "id"
        },
        unique: "playerWithTeam"
    },
    player_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: user_1.default,
            key: "id"
        },
        unique: "playerWithTeam"
    }
}, { sequelize: _1.default, timestamps: true, modelName: "Team_With_Player" });
exports.default = TeamWithPlayer;
