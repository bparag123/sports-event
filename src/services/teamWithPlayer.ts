import TeamWithPlayer, { TWPBody } from "../models/Team_With_Player"
import { findTeamById } from "./team"
import { findUserById } from "./user"

//**Registering Player With Team */
export const addPlayerToTeam = async (data: TWPBody) => {
    const [team, player] = await Promise.all([
        findTeamById(data.team_id),
        findUserById(data.player_id)
    ])
    if (team === null) {
        return Promise.reject("Team not Found")
    }
    if (player === null) {
        return Promise.reject("Player not Found")
    }
    await TeamWithPlayer.create(data)
    return Promise.resolve("Player Added")
}

export const removePlayer = async (data: TWPBody) => {
    const twp = await TeamWithPlayer.findOne({where:data})
    if(twp===null){
        return Promise.reject("Player with This team not found")
    }
    await twp.destroy()
    return Promise.resolve("Player Removed")
}