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
exports.getTeamsOfCategory = exports.removeCategory = exports.findCategoryById = exports.addCategory = void 0;
const category_1 = __importDefault(require("../models/category"));
const team_1 = __importDefault(require("../models/team"));
const addCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield category_1.default.create(data);
    }
    catch (error) {
        return new Error(error.errors[0].message);
    }
});
exports.addCategory = addCategory;
const findCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield category_1.default.findByPk(id);
    }
    catch (error) {
        return new Error(error.errors[0].message);
    }
});
exports.findCategoryById = findCategoryById;
const removeCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_1.default.destroy({
        where: { id: id }
    });
});
exports.removeCategory = removeCategory;
const getTeamsOfCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield category_1.default.findAll({
        where: {
            id: id
        },
        include: {
            model: team_1.default,
            attributes: ["name", "id"]
        }
    });
    return game;
});
exports.getTeamsOfCategory = getTeamsOfCategory;
