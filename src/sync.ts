import User from "./models/user";
import sequelize from "./models"
import Team from "./models/team";
import Game from "./models/game";
import TeamWithPlayer from "./models/Team_With_Player";
import "./models/tournament"
import Tournament from "./models/tournament";
import Category from "./models/category";
import TeamsOfTournament from "./models/Teams_Of_Tournament";

Game.hasMany(Team,  {foreignKey:"game_id"})
Team.belongsTo(Game,  {foreignKey:"game_id"})

Category.hasMany(Team, {foreignKey:"category_id"})
Team.belongsTo(Category, {foreignKey:"category_id"})

Category.hasMany(Tournament, {foreignKey:"category_id"})
Tournament.belongsTo(Category, {foreignKey:"category_id"})

Game.hasMany(Tournament, {foreignKey:"game_id"})
Tournament.belongsTo(Game, {foreignKey:"game_id"})

User.belongsToMany(Team, {through:TeamWithPlayer, foreignKey:"player_id"})
Team.belongsToMany(User, {through:TeamWithPlayer, foreignKey:"team_id"})

Team.belongsToMany(Tournament, {through: TeamsOfTournament, foreignKey:"team_id"})
Tournament.belongsToMany(Team, {through: TeamsOfTournament, foreignKey:"tournament_id"})

sequelize.sync()
    .then((result: any) => {
        console.info("done");
    })
    .catch((error: { message: string; }) => {
        console.error(error.message);
    })