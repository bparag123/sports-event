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
exports.removePlayer = exports.addPlayerToTeam = void 0;
const Team_With_Player_1 = __importDefault(require("../models/Team_With_Player"));
const team_1 = require("./team");
const user_1 = require("./user");
const addPlayerToTeam = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [team, player] = yield Promise.all([
        (0, team_1.findTeamById)(data.team_id),
        (0, user_1.findUserById)(data.player_id)
    ]);
    if (team === null) {
        return Promise.reject("Team not Found");
    }
    if (player === null) {
        return Promise.reject("Player not Found");
    }
    yield Team_With_Player_1.default.create(data);
    return Promise.resolve("Player Added");
});
exports.addPlayerToTeam = addPlayerToTeam;
const removePlayer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const twp = yield Team_With_Player_1.default.findOne({ where: data });
    if (twp === null) {
        return Promise.reject("Player with This team not found");
    }
    yield twp.destroy();
    return Promise.resolve("Player Removed");
});
exports.removePlayer = removePlayer;
