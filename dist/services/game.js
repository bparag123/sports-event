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
exports.getTeamsOfGame = exports.removeGame = exports.findGameById = exports.addGame = void 0;
const game_1 = __importDefault(require("../models/game"));
const team_1 = __importDefault(require("../models/team"));
const addGame = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield game_1.default.create(data);
});
exports.addGame = addGame;
const findGameById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield game_1.default.findByPk(id);
});
exports.findGameById = findGameById;
const removeGame = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield game_1.default.destroy({
        where: { id: id }
    });
});
exports.removeGame = removeGame;
const getTeamsOfGame = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield game_1.default.findAll({
        where: {
            id: id
        },
        include: {
            model: team_1.default,
            attributes: ["name", "id", "category"]
        }
    });
    return game;
});
exports.getTeamsOfGame = getTeamsOfGame;
