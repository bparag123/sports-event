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
exports.removePlayerFromTeam = exports.addPlayer = exports.getTeamDetails = exports.createTeam = void 0;
const team_1 = require("../services/team");
const teamWithPlayer_1 = require("../services/teamWithPlayer");
const createTeam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const team = yield (0, team_1.addTeam)(req.body);
    if (team instanceof Error) {
        return next(team);
    }
    return res.json(team);
});
exports.createTeam = createTeam;
const getTeamDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const team = yield (0, team_1.getTeamData)(id);
    return res.json(team);
});
exports.getTeamDetails = getTeamDetails;
const addPlayer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, teamWithPlayer_1.addPlayerToTeam)(req.body);
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
exports.addPlayer = addPlayer;
const removePlayerFromTeam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, teamWithPlayer_1.removePlayer)(req.body);
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
exports.removePlayerFromTeam = removePlayerFromTeam;
