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
exports.addTeamInTournament = exports.getTournamentDetails = exports.addTournament = void 0;
const teamsOfTournament_1 = require("../services/teamsOfTournament");
const tournament_1 = require("../services/tournament");
const addTournament = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tournament = yield (0, tournament_1.createTournament)(req.body);
    if (tournament instanceof Error) {
        return next(tournament);
    }
    return res.json(tournament);
});
exports.addTournament = addTournament;
const getTournamentDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const tournament = yield (0, tournament_1.getTournamentData)(id);
    return res.json(tournament);
});
exports.getTournamentDetails = getTournamentDetails;
const addTeamInTournament = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, teamsOfTournament_1.addTeamToTournament)(req.body);
        return res.json({
            message: result
        });
    }
    catch (error) {
        return res.json({
            message: error
        });
    }
});
exports.addTeamInTournament = addTeamInTournament;
