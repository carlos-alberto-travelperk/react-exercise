import UseInputState from "./Hooks/useInputState"

function EditRecipeItem({ recipe, editRecipe, toggle }) {
    const [nameVal, nameChange, nameReset] = UseInputState(recipe.name)
    const [descVal, descChange, descReset] = UseInputState(recipe.description)

    return <form onSubmit={e => {
        e.preventDefault()
        const updated = { "id": recipe.id, "name": nameVal, "description": descVal, "ingredients": recipe.ingredients }
        editRecipe(recipe.id, updated);
        nameReset();
        descReset();
        toggle();
    }}>
        <h3>Name:</h3>
        <input type="text" defaultValue={nameVal} onChange={nameChange} />
        <h3>Description:</h3>
        <input type="text" defaultValue={descVal} onChange={descChange} />
        <button type="submit">Submit</button>
    </form>

}

export default EditRecipeItem;