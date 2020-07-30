import {EventEmitter,Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService
{
	recipesChanged = new Subject<Recipe[]>();

	//private recipes : Recipe[] = [
	  //new Recipe ('Four cheese pepperoni pizza',
	  //'a simple dummy recipe',
	  //'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU23//01_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/156//5115622965.jpeg',
	  //[
	  	//new Ingredients('cheese',10),
	  	//new Ingredients('paneer',5),

	  //]),
	  

	  //new Recipe (' another dummy ','a simple dummy 
	  //recipe','https://food.fnr.sndimg.com/content/dam/images/food/
	  //fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgt
	  //vcom.826.620.suffix/1565115622965.jpeg',[])

	//];

	private recipes: Recipe[] = [];

	constructor(private slService:ShoppingListService){}

	setRecipes(recipes:Recipe[])
	{
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes()
	{
		return this.recipes.slice();
	}
	
	getRecipe(index:number)
	{
		return this.recipes[index];
	}
	
	addIngredientsToShopList(ingredients:Ingredients[])
	{
		this.slService.addIngredient(ingredients);
	}
	addRecipe(recipe:Recipe)
	{
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index:number, newRecipe:Recipe)
	{
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	deleteRecipe(index:number)
	{
		this.recipes.splice(index,1);
		this.recipesChanged.next(this.recipes.slice());
	}
}