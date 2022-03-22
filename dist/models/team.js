"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const category_1 = __importDefault(require("./category"));
const game_1 = __importDefault(require("./game"));
class Team extends sequelize_1.Model {
}
Team.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: "teamOfGame"
    },
    //Here game_id and category_id is composite key
    game_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: game_1.default,
            key: "id"
        },
        unique: "teamOfGame"
    },
    category_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: category_1.default,
            key: "id"
        },
        unique: "teamOfGame"
    }
}, { sequelize: _1.default, timestamps: true, modelName: "Team" });
exports.default = Team;
