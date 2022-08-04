function RecipeItem({ recipe }) {
    return (
        <div>
            <h3>Name: {recipe.name}</h3>
            <h3>Description: {recipe.name}</h3>
            <h3>Ingredients:</h3>
            {recipe.ingredients.map(ingredient => <li>{ingredient.name}</li>)}
        </div>
    )
}

export default RecipeItem