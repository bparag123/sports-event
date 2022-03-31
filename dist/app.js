"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./sync");
const routers_1 = require("./routers");
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Defining Routes for all Controllers
app.use("/user", routers_1.userRouter);
app.use("/team", routers_1.teamRouter);
app.use("/game", routers_1.gameRouter);
app.use("/tournament", routers_1.tournamentRouter);
app.use("/category", routers_1.categoryRouter);
app.use(errorHandler_1.default);
app.listen(3000, () => {
    console.log(`Server is running`);
});
