"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const category_1 = __importDefault(require("./category"));
const game_1 = __importDefault(require("./game"));
class Tournament extends sequelize_1.Model {
}
Tournament.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    game_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: game_1.default,
            key: "id"
        }
    },
    category_id: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: category_1.default,
            key: "id"
        }
    },
    start_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    end_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    organizer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: _1.default, timestamps: true, modelName: "Tournament" });
exports.default = Tournament;
