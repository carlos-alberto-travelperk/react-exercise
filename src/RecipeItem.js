import useToggle from "./Hooks/useToggle"
import EditRecipeItem from "./EditRecipeItem"
import Button from "./Style/Button"

function RecipeItem({ recipe, editRecipe }) {
    const [isEditing, toggle] = useToggle(false)

    return (
        <div>{isEditing ? <EditRecipeItem recipe={recipe} editRecipe={editRecipe} toggle={toggle} /> :
            <>
                <h3>Name: {recipe.name}</h3>
                <h3>Description: {recipe.description}</h3>
                <h3>Ingredients:</h3>
                {recipe.ingredients.map(ingredient => <li>{ingredient.name}</li>)}
                <Button onClick={toggle}>EDIT</Button>
            </>
        }</div>
    )
}

export default RecipeItem