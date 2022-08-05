import { useState } from 'react';
import RecipeList from "./RecipeList"

function RecipeApp() {
    const initialValues = [{ "id": 1, "name": "Cake", "description": "deli", "ingredients": [{ "name": "milk" }] }];
    const [recipes, setRecipes] = useState(initialValues);

    const addRecipe = (newRecipe) => {
        //call the api and save the response if 201
        setRecipes([...recipes, newRecipe]);
    };

    const editRecipe = (recipeId, updatedRecipe) => {
        const updatedRecipes = recipes.map(recipe => recipe.id === recipeId ? updatedRecipe : recipe)
        setRecipes(updatedRecipes);
    };

    const removeRecipe = (recipeId) => {
        setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
    };

    return (
        <RecipeList recipes={recipes} addRecipe={addRecipe} editRecipe={editRecipe} removeRecipe={removeRecipe} />
    );
}

export default RecipeApp;