import { Request,Response,Router } from "express";

class RecipeRouter{

    router:Router
    
    constructor(){
        this.router=Router();
        this.routes();
    }

    getRecipes(req:Request,res:Response){
        res.send('getRecipes')
    }

    getRecipe(){

    }

    createRecipe(){

    }

    updateRecipe(){

    }

    deleteRecipe(){

    }

    routes() {
        this.router.get("/",this.getRecipes);
        this.router.get("/:id",this.getRecipe);
        this.router.post("/",this.createRecipe);
        this.router.put("/:id",this.updateRecipe);
        this.router.delete("/:id",this.deleteRecipe);
    }
}

const recipeRouter = new RecipeRouter();
export default recipeRouter.router;