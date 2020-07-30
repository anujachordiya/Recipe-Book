import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService
{
	ingredientsChanged = new Subject<Ingredients[]>();
	startedEditing = new Subject<number>();

	private ingredients : Ingredients[] = [
	new Ingredients('Apples',5),
	new Ingredients('Bananas',10),
	];	

	getIngredients()
	{
		return this.ingredients.slice();
	}

	getIngredientf(index:number)
	{
		return this.ingredients[index];
	}

	addIngredients(ingredient:Ingredients)
  	{
    	this.ingredients.push(ingredient);
    	this.ingredientsChanged.next(this.ingredients.slice());
  	}

  	addIngredient(ingredients:Ingredients[])
  	{
  		this.ingredients.push(...ingredients);
  		this.ingredientsChanged.next(this.ingredients.slice());	
  	}

  	updateIngredient(index:number, newIngredient:Ingredients)
  	{
  		this.ingredients[index] = newIngredient;
  		this.ingredientsChanged.next(this.ingredients.slice());
  	}

  	deleteIngredient(index:number)
  	{
  		this.ingredients.splice(index,1);
  		this.ingredientsChanged.next(this.ingredients.slice());
  	}
}