"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const router = (0, express_1.Router)();
router.post("/create-category", category_1.createCategory);
router.get("/get-all-teams-of-category/:id", category_1.getTeamOfCategory);
exports.default = router;
