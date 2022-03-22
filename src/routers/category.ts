import {Router} from 'express';
import { createCategory, getTeamOfCategory } from '../controllers/category';
const router:Router = Router()

router.post("/create-category", createCategory)
router.get("/get-all-teams-of-category/:id",getTeamOfCategory)

export default router