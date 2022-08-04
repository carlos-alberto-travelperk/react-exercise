import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes }) {
    return (
        <div>
            {recipes.map(recipe => <RecipeItem recipe={recipe} />)}
        </div>
    )
}

export default RecipeList