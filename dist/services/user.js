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
exports.loginUser = exports.removeUser = exports.findUserById = exports.addUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.create(data);
});
exports.addUser = addUser;
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByPk(id);
});
exports.findUserById = findUserById;
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.destroy({
        where: { id: id }
    });
});
exports.removeUser = removeUser;
const loginUser = (creadential) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(creadential);
    const user = yield user_1.default.findOne({
        where: {
            email: creadential.email
        }
    });
    console.log(user);
    if (user === null) {
        return Promise.reject("User not found");
    }
    if (user.password !== creadential.password) {
        return Promise.reject("Invalid Password");
    }
    return Promise.resolve("Login Sucessfull");
});
exports.loginUser = loginUser;
