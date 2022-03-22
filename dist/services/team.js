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
const team_1 = __importDefault(require("../models/team"));
const user_1 = __importDefault(require("../models/user"));
const addTeam = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    return yield team_1.default.create(data);
});
exports.addTeam = addTeam;
const findTeamById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield team_1.default.findByPk(id);
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
        include: {
            model: user_1.default,
            attributes: ["email"],
            through: {
                attributes: []
            }
        }
    });
    return team;
});
exports.getTeamData = getTeamData;
