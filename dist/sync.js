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
//Here game_id is a foreign key which stored in Team Table
game_1.default.hasMany(team_1.default, { foreignKey: "game_id" });
team_1.default.belongsTo(game_1.default, { foreignKey: "game_id" });
//Here category_id is a foreign key which stored in Team Table
category_1.default.hasMany(team_1.default, { foreignKey: "category_id" });
team_1.default.belongsTo(category_1.default, { foreignKey: "category_id" });
//Here category_id is a foreign key which stored in Tournament Table
category_1.default.hasMany(tournament_1.default, { foreignKey: "category_id" });
tournament_1.default.belongsTo(category_1.default, { foreignKey: "category_id" });
//Here game_id is a foreign key which stored in Tournament Table
game_1.default.hasMany(tournament_1.default, { foreignKey: "game_id" });
tournament_1.default.belongsTo(game_1.default, { foreignKey: "game_id" });
//TeamWithPlayer is a Junction Table, will store player_id and team_id reference
user_1.default.belongsToMany(team_1.default, { through: Team_With_Player_1.default, foreignKey: "player_id" });
team_1.default.belongsToMany(user_1.default, { through: Team_With_Player_1.default, foreignKey: "team_id" });
//TeamsOfTournament is a Junction Table, will store tournament_id and team_id reference
team_1.default.belongsToMany(tournament_1.default, { through: Teams_Of_Tournament_1.default, foreignKey: "team_id" });
tournament_1.default.belongsToMany(team_1.default, { through: Teams_Of_Tournament_1.default, foreignKey: "tournament_id" });
models_1.default.sync()
    .then((result) => {
    console.info("done");
})
    .catch((error) => {
    console.error(error.message);
});
