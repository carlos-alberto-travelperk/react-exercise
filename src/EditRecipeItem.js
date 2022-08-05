import { useState } from "react"
import UseInputState from "./Hooks/useInputState"
import Button from "./Style/Button"
import Input from "./Style/Input"
import Label from "./Style/Label"

function EditRecipeItem({ recipe, editRecipe, setEditingRecipe }) {
    const [nameVal, nameChange, nameReset] = UseInputState(recipe.name)
    const [descVal, descChange, descReset] = UseInputState(recipe.description)
    const [newIngredient, newIngredientChange, newIngredientReset] = UseInputState("")
    const [ingredients, setIngredients] = useState(recipe.ingredients)

    const handleRemove = (e) => {
        const newIngredients = ingredients.filter(ing => ing.name !== e.target.name)
        setIngredients(newIngredients)
    }

    const handleAdd = () => {
        if (newIngredient) {
            setIngredients([...ingredients, { "name": newIngredient }])
            newIngredientReset()
        }
    }

    return <form onSubmit={e => {
        e.preventDefault()
        if (nameVal.trim() && descVal.trim() && ingredients.length > 0) {
            const updated = { "id": recipe.id, "name": nameVal, "description": descVal, "ingredients": ingredients }
            editRecipe(recipe.id, updated);
            nameReset();
            descReset();
            newIngredientReset();
            setIngredients([]);
            setEditingRecipe(undefined);
        } else {
            alert("Ops! Seems like you have an empty field!")
        }
    }}>
        <h3>Name:</h3>
        <Input type="text" defaultValue={nameVal} onChange={nameChange} />
        <h3>Description:</h3>
        <Input type="text" defaultValue={descVal} onChange={descChange} />
        <h3>Ingredients:</h3>
        {ingredients.map(ing => {
            return (
                <div >
                    <Label>{ing.name}</Label>
                    <Button type="button" name={ing.name} onClick={handleRemove}>Remove!</Button>
                </div>)
        })}
        <div >
            <Input type="text" placeholder="Add new ingredient here" value={newIngredient} onChange={newIngredientChange} />
            <Button type="button" onClick={handleAdd}>Add Ingredient!</Button>
        </div>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => { setEditingRecipe(undefined) }}>Cancel</Button>
    </form>

}

export default EditRecipeItem;