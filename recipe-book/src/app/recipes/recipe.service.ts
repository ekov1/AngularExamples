import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'test Recipe',
            'test decription',
            'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/3:2/w_3000,h_2000,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
            [new Ingredient('Apple', 1), new Ingredient('Meat', 1)]),
        new Recipe(
            'Another test Recipe',
            'Another test decription',
            'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-pizza-casserole-1676054902.jpeg',
            [new Ingredient('Bread', 1), new Ingredient('French Fries', 20)])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice(); // return copy of the []
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }
}