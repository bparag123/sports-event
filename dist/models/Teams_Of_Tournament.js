"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const team_1 = __importDefault(require("./team"));
const tournament_1 = __importDefault(require("./tournament"));
class TeamsOfTournament extends sequelize_1.Model {
}
TeamsOfTournament.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true
    },
    //Here team_id and tournament_id is composite key
    team_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: team_1.default,
            key: "id"
        },
        unique: "teamsOfTournament"
    },
    tournament_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: tournament_1.default,
            key: "id"
        },
        unique: "teamsOfTournament"
    }
}, { sequelize: _1.default, timestamps: true, modelName: "Teams_Of_Tournament" });
exports.default = TeamsOfTournament;
