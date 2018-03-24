import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected  = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
      new Recipe('A test Recipe', 'This is simply a test', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg'),
      new Recipe('Another test Recipe', 'This is simply a test', 'http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
