import {Router} from 'express';
import { addTeamInTournament, addTournament, getTournamentDetails } from '../controllers/tournament';

const router = Router()

router.post("/create-tournament", addTournament)
router.post("/add-team",addTeamInTournament)
router.get("/see-tournament/:id",getTournamentDetails)

export default router