import {Router} from 'express';
import { getTeamOfGame , createGame} from '../controllers/game';
const router = Router()

router.post("/create-game", createGame)
router.get("/get-all-teams-of-game/:id",getTeamOfGame)

export default router