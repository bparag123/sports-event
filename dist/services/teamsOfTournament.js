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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTeamToTournament = void 0;
const Teams_Of_Tournament_1 = __importDefault(require("../models/Teams_Of_Tournament"));
const team_1 = require("./team");
const tournament_1 = require("./tournament");
//**Adding Participating Team in the Tournament */
const addTeamToTournament = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [tournament, team] = yield Promise.all([
        (0, tournament_1.findTournamentById)(data.tournament_id),
        (0, team_1.findTeamById)(data.team_id)
    ]);
    if (team === null) {
        return Promise.reject("Team not Found");
    }
    if (tournament === null) {
        return Promise.reject("Tournament not Found");
    }
    const twp = yield Teams_Of_Tournament_1.default.create(data);
    return Promise.resolve("Team Added");
});
exports.addTeamToTournament = addTeamToTournament;
