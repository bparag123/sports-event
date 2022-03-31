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
exports.getTeamData = exports.removeTeam = exports.findTeamById = exports.addTeam = void 0;
const category_1 = __importDefault(require("../models/category"));
const game_1 = __importDefault(require("../models/game"));
const team_1 = __importDefault(require("../models/team"));
const user_1 = __importDefault(require("../models/user"));
/**This is a Service for the Team Model Operations */
const addTeam = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield team_1.default.create(data);
    }
    catch (error) {
        return new Error(error.errors[0].message);
    }
});
exports.addTeam = addTeam;
const findTeamById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield team_1.default.findByPk(id);
    }
    catch (error) {
        return new Error(error.errors[0].message);
    }
});
exports.findTeamById = findTeamById;
const removeTeam = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield team_1.default.destroy({
        where: { id: id }
    });
});
exports.removeTeam = removeTeam;
const getTeamData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const team = yield team_1.default.findAll({
        where: {
            id: id
        },
        //**Joining the User, Game, Category with Team Table */
        include: [
            {
                model: user_1.default, attributes: ["email", "id"],
                through: {
                    attributes: []
                }
            },
            { model: game_1.default, attributes: ["id", "name"] },
            { model: category_1.default, attributes: ["id", "name"] }
        ],
        attributes: ["id", "name"]
    });
    return team;
});
exports.getTeamData = getTeamData;
