"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamOfGame = exports.createGame = void 0;
const game_1 = require("../services/game");
const createGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield (0, game_1.addGame)(req.body);
    return res.json({
        message: "Game Added",
        game
    });
});
exports.createGame = createGame;
const getTeamOfGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const teams = yield (0, game_1.getTeamsOfGame)(id);
    return res.json(teams);
});
exports.getTeamOfGame = getTeamOfGame;
