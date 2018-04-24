import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) {
    }

    onSaveData() {
        return this.http.put('https://aaa2-b6d44.firebaseio.com/data.json', this.recipeService.getRecipes())
    }

    onFetchData() {
        this.http.get('https://aaa2-b6d44.firebaseio.com/data.json').map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            },
            (error) => console.log(error)
        )
    }
}
