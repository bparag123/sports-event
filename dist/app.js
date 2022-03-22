"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./sync");
const routers_1 = require("./routers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("", (req, res, next) => {
    res.json("Hello Json Data");
});
app.use("/user", routers_1.userRouter);
app.use("/team", routers_1.teamRouter);
app.use("/game", routers_1.gameRouter);
app.use("/tournament", routers_1.tournamentRouter);
app.use("/category", routers_1.categoryRouter);
app.listen(3000, () => {
    console.log(`Server is running`);
});
