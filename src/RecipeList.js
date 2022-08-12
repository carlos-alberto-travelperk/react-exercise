import { useState } from 'react'
import AddRecipeForm from './AddRecipeForm'
import EditRecipeItem from './EditRecipeItem'
import RecipeItem from './RecipeItem'
import UseToggle from './Hooks/useToggle'
import Button from './Style/Button'
import { v4 as uuid } from 'uuid'


function RecipeList({ recipes, addRecipe, editRecipe, removeRecipe }) {
    const [editingRecipe, setEditingRecipe] = useState(undefined)
    const [isAdding, setIsAdding] = UseToggle(false)

    return (
        <div>
            {editingRecipe !== undefined ?
                <EditRecipeItem recipe={editingRecipe} editRecipe={editRecipe} setEditingRecipe={setEditingRecipe} /> :

                isAdding ?
                    <AddRecipeForm addRecipe={addRecipe} toggle={setIsAdding} /> :
                    <div>
                        {recipes.map(recipe => <RecipeItem key={uuid()} recipe={recipe} setEditingRecipe={setEditingRecipe} removeRecipe={removeRecipe} />)}
                        <Button type="button" onClick={setIsAdding}>Add Recipe</Button>
                    </div>
            }
        </div>
    )
}

export default RecipeList