import Button from "./Style/Button"
import { v4 as uuid } from 'uuid'

function RecipeItem({ recipe, setEditingRecipe, removeRecipe }) {
    return (
        <div>
            <h3>Name: {recipe.name}</h3>
            <h3>Description: {recipe.description}</h3>
            <h3>Ingredients:</h3>
            {recipe.ingredients.map(ingredient => <li key={uuid()}> {ingredient.name}</li>)}
            <Button onClick={() => { setEditingRecipe(recipe) }}>EDIT</Button>
            <Button onClick={() => { removeRecipe(recipe.id) }}>REMOVE</Button>
        </div>
    )
}

export default RecipeItem