"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./models/user"));
const models_1 = __importDefault(require("./models"));
const team_1 = __importDefault(require("./models/team"));
const game_1 = __importDefault(require("./models/game"));
const Team_With_Player_1 = __importDefault(require("./models/Team_With_Player"));
require("./models/tournament");
const tournament_1 = __importDefault(require("./models/tournament"));
const category_1 = __importDefault(require("./models/category"));
const Teams_Of_Tournament_1 = __importDefault(require("./models/Teams_Of_Tournament"));
game_1.default.hasMany(team_1.default, { foreignKey: "game_id" });
team_1.default.belongsTo(game_1.default, { foreignKey: "game_id" });
category_1.default.hasMany(tournament_1.default);
tournament_1.default.belongsTo(category_1.default, { foreignKey: "category_id" });
game_1.default.hasMany(tournament_1.default);
tournament_1.default.belongsTo(game_1.default, { foreignKey: "game_id" });
user_1.default.belongsToMany(team_1.default, { through: Team_With_Player_1.default, foreignKey: "player_id" });
team_1.default.belongsToMany(user_1.default, { through: Team_With_Player_1.default, foreignKey: "team_id" });
team_1.default.belongsToMany(tournament_1.default, { through: Teams_Of_Tournament_1.default, foreignKey: "team_id" });
tournament_1.default.belongsToMany(team_1.default, { through: Teams_Of_Tournament_1.default, foreignKey: "tournament_id" });
models_1.default.sync()
    .then((result) => {
    console.info("done");
})
    .catch((error) => {
    console.error(error.message);
});
