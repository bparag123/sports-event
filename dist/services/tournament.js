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
exports.getTournamentData = exports.removeTournament = exports.findTournamentById = exports.createTournament = void 0;
const category_1 = __importDefault(require("../models/category"));
const game_1 = __importDefault(require("../models/game"));
const team_1 = __importDefault(require("../models/team"));
const tournament_1 = __importDefault(require("../models/tournament"));
/**This is a Service for the Tournament Model Operations */
const createTournament = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.start_date = new Date(data.start_date);
    data.end_date = new Date(data.end_date);
    try {
        return yield tournament_1.default.create(data);
    }
    catch (error) {
        return new Error(error.errors[0].message);
    }
});
exports.createTournament = createTournament;
const findTournamentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield tournament_1.default.findByPk(id);
    }
    catch (error) {
        return new Error(error.errors[0].message);
    }
});
exports.findTournamentById = findTournamentById;
const removeTournament = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield tournament_1.default.destroy({
        where: { id: id }
    });
});
exports.removeTournament = removeTournament;
const getTournamentData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tournament = yield tournament_1.default.findAll({
        where: {
            id: id
        },
        /** Joining the Team, Game and Category table with Tournament Table */
        include: [
            { model: team_1.default, through: {
                    attributes: []
                }, attributes: ["id", "name"] },
            { model: game_1.default, attributes: ["name", "id"] },
            { model: category_1.default, attributes: ["name", "id"] }
        ],
        attributes: ["name", "organizer", "location", "start_date", "end_date"]
    });
    return tournament;
});
exports.getTournamentData = getTournamentData;
