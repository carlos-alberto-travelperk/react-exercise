import { useState } from "react"
import UseInputState from "./Hooks/useInputState"
import Button from "./Style/Button"
import Input from "./Style/Input"
import Label from "./Style/Label"
import { v4 as uuid } from 'uuid'

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

    const resetAll = () => {
        nameReset()
        descReset()
        newIngredientReset()
        setIngredients([])
    }

    const isAllFieldsFilled = () => nameVal.trim() && descVal.trim() && ingredients.length > 0

    return <form onSubmit={e => {
        e.preventDefault()
        if (isAllFieldsFilled()) {
            const updated = { "id": recipe.id, "name": nameVal, "description": descVal, "ingredients": ingredients }
            editRecipe(recipe.id, updated)
            resetAll()
            setEditingRecipe(undefined)
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
                <div key={uuid()}>
                    <Label>{ing.name}</Label>
                    <Button type="button" name={ing.name} onClick={handleRemove}>Remove!</Button>
                </div>)
        })}
        <div>
            <Input type="text" placeholder="Add new ingredient here" value={newIngredient} onChange={newIngredientChange} />
            <Button type="button" onClick={handleAdd}>Add Ingredient!</Button>
        </div>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => { setEditingRecipe(undefined) }}>Cancel</Button>
    </form>

}

export default EditRecipeItem