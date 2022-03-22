"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tournament_1 = require("../controllers/tournament");
const router = (0, express_1.Router)();
router.post("/create-tournament", tournament_1.addTournament);
router.post("/add-team", tournament_1.addTeamInTournament);
router.get("/see-tournament/:id", tournament_1.getTournamentDetails);
exports.default = router;
