"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = exports.userRouter = exports.tournamentRouter = exports.teamRouter = exports.categoryRouter = void 0;
const category_1 = __importDefault(require("./category"));
exports.categoryRouter = category_1.default;
const team_1 = __importDefault(require("./team"));
exports.teamRouter = team_1.default;
const tournament_1 = __importDefault(require("./tournament"));
exports.tournamentRouter = tournament_1.default;
const user_1 = __importDefault(require("./user"));
exports.userRouter = user_1.default;
const game_1 = __importDefault(require("./game"));
exports.gameRouter = game_1.default;
