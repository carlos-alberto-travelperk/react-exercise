import RecipeItem from './RecipeItem';

function RecipeList({ recipes, editRecipe }) {
    return (
        <div>
            {recipes.map(recipe => <RecipeItem recipe={recipe} editRecipe={editRecipe} />)}
        </div>
    )
}

export default RecipeList