import TeamsOfTournament, { TOTBody } from "../models/Teams_Of_Tournament"
import { findTeamById } from "./team"
import { findTournamentById } from "./tournament"

export const addTeamToTournament = async (data: TOTBody) => {
    const [tournament, team] = await Promise.all([
        findTournamentById(data.tournament_id),
        findTeamById(data.team_id)
    ])
    if (team === null) {
        return Promise.reject("Team not Found")
    }
    if (tournament === null) {
        return Promise.reject("Tournament not Found")
    }
    const twp = await TeamsOfTournament.create(data)
    return Promise.resolve("Team Added")
}