"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_1 = require("../controllers/team");
const router = (0, express_1.Router)();
router.post("/create-team", team_1.createTeam);
router.post("/add-player", team_1.addPlayer);
router.get("/see-team/:id", team_1.getTeamDetails);
router.post("/remove-player", team_1.removePlayerFromTeam);
exports.default = router;
