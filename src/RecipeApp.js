import { useState } from 'react';
import RecipeList from "./RecipeList"

function RecipeApp() {
    const initialValues = [{ "id": 1, "name": "Cake", "description": "deli", "ingredients": [{ "name": "milk" }] }];
    const [recipes, setRecipes] = useState(initialValues);

    const editRecipe = (recipeId, updatedRecipe) => {
        const updatedRecipes = recipes.map(recipe => recipe.id === recipeId ? updatedRecipe : recipe)
        setRecipes(updatedRecipes);
    };

    return <RecipeList recipes={recipes} editRecipe={editRecipe} />;
}

export default RecipeApp;