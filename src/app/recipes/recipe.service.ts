import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg'),
        new Recipe('Another test Recipe', 'This is simply a test', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg')
    ];
    getRecipes() {
        return this.recipes.slice();
    }

}