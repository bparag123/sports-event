"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const game_1 = require("../controllers/game");
const router = (0, express_1.Router)();
router.post("/create-game", game_1.createGame);
router.get("/get-all-teams-of-game/:id", game_1.getTeamOfGame);
exports.default = router;
