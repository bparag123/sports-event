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
exports.getTeamOfCategory = exports.createCategory = void 0;
const category_1 = require("../services/category");
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, category_1.addCategory)(req.body);
    if (category instanceof Error) {
        return next(category);
    }
    return res.json(category);
});
exports.createCategory = createCategory;
const getTeamOfCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const teams = yield (0, category_1.getTeamsOfCategory)(id);
    return res.json(teams);
});
exports.getTeamOfCategory = getTeamOfCategory;
