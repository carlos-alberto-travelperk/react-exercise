import { useState, useEffect } from 'react'
import RecipeList from "./RecipeList"
import axios from 'axios'
import { v4 as uuid } from 'uuid'

function RecipeApp() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://127.0.0.1:8000/recipes/')

            setRecipes(result.data)
        }

        fetchData()
    }, [])

    const addRecipe = (newRecipe) => {
        axios.post(`http://127.0.0.1:8000/recipes/`, newRecipe)
            .then(response => setRecipes([...recipes, response.data]))
    }

    const editRecipe = (recipeId, updatedRecipe) => {
        axios.patch(`http://127.0.0.1:8000/recipes/${recipeId}/`, updatedRecipe)
            .then(response => setRecipes(recipes.map(recipe => recipe.id === recipeId ? response.data : recipe)))
    }

    const removeRecipe = (recipeId) => {
        axios.delete(`http://127.0.0.1:8000/recipes/${recipeId}/`)
        setRecipes(recipes.filter(recipe => recipe.id !== recipeId))
    }

    return (
        <RecipeList key={uuid()} recipes={recipes} addRecipe={addRecipe} editRecipe={editRecipe} removeRecipe={removeRecipe} />
    )
}

export default RecipeApp