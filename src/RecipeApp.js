import React, { useState } from 'react';
import RecipeList from "./RecipeList"

function RecipeApp() {
    const initialValues = [{ "id": 1, "name": "Cake", "description": "deli", "ingredients": [{ "id": 1, "name": "milk" }] }]
    const [recipes, setRecipes] = useState(initialValues)

    return <RecipeList recipes={recipes} />;
}

export default RecipeApp;