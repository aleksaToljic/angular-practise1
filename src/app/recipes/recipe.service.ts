import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Another test Recipe', 'This is simply a test', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg',
            [
               new Ingredient('Buns',2),
               new Ingredient('Meat', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}