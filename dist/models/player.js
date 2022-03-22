"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const user_1 = __importDefault(require("./user"));
class Player extends sequelize_1.Model {
}
Player.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true
    },
    aadhar_number: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    mobile_number: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    birth_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: user_1.default,
            key: "id"
        },
        unique: true,
        allowNull: false
    }
}, { sequelize: _1.default, timestamps: true, modelName: "Player" });
exports.default = Player;
