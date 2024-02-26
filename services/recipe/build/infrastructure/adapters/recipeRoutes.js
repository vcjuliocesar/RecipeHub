"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RecipeRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getRecipes(req, res) {
        res.send('getRecipes');
    }
    getRecipe() {
    }
    createRecipe() {
    }
    updateRecipe() {
    }
    deleteRecipe() {
    }
    routes() {
        this.router.get("/", this.getRecipes);
        this.router.get("/:id", this.getRecipe);
        this.router.post("/", this.createRecipe);
        this.router.put("/:id", this.updateRecipe);
        this.router.delete("/:id", this.deleteRecipe);
    }
}
const recipeRouter = new RecipeRouter();
exports.default = recipeRouter.router;
