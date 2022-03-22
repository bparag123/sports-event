import {Router} from 'express';
import { addPlayer, createTeam, getTeamDetails, removePlayerFromTeam} from '../controllers/team';

const router = Router()

router.post("/create-team", createTeam)
router.post("/add-player",addPlayer)
router.get("/see-team/:id",getTeamDetails)
router.post("/remove-player", removePlayerFromTeam)

export default router