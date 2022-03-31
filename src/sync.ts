import User from "./models/user";
import sequelize from "./models"
import Team from "./models/team";
import Game from "./models/game";
import TeamWithPlayer from "./models/Team_With_Player";
import "./models/tournament"
import Tournament from "./models/tournament";
import Category from "./models/category";
import TeamsOfTournament from "./models/Teams_Of_Tournament";

//Here game_id is a foreign key which stored in Team Table
Game.hasMany(Team,  {foreignKey:"game_id"})
Team.belongsTo(Game,  {foreignKey:"game_id"})

//Here category_id is a foreign key which stored in Team Table
Category.hasMany(Team, {foreignKey:"category_id"})
Team.belongsTo(Category, {foreignKey:"category_id"})

//Here category_id is a foreign key which stored in Tournament Table
Category.hasMany(Tournament, {foreignKey:"category_id"})
Tournament.belongsTo(Category, {foreignKey:"category_id"})

//Here game_id is a foreign key which stored in Tournament Table
Game.hasMany(Tournament, {foreignKey:"game_id"})
Tournament.belongsTo(Game, {foreignKey:"game_id"})

//TeamWithPlayer is a Junction Table, will store player_id and team_id reference
User.belongsToMany(Team, {through:TeamWithPlayer, foreignKey:"player_id"})
Team.belongsToMany(User, {through:TeamWithPlayer, foreignKey:"team_id"})

//TeamsOfTournament is a Junction Table, will store tournament_id and team_id reference
Team.belongsToMany(Tournament, {through: TeamsOfTournament, foreignKey:"team_id"})
Tournament.belongsToMany(Team, {through: TeamsOfTournament, foreignKey:"tournament_id"})

sequelize.sync()
    .then((result: any) => {
        console.info("done");
    })
    .catch((error: { message: string; }) => {
        console.error(error.message);
    })