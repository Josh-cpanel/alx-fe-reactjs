import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'


const AddRecipeForm = () => {
const addRecipe = useRecipeStore((state) => state.addRecipe)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const navigate = useNavigate()


const handleSubmit = (e) => {
e.preventDefault()
if (!title.trim()) return


const newRecipe = { id: Date.now(), title: title.trim(), description: description.trim() }
addRecipe(newRecipe)


setTitle('')
setDescription('')


// optional: navigate to new recipe details
navigate(`/recipes/${newRecipe.id}`)
}


return (
<form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
<div>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Title"
required
/>
</div>
<div>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Description"
/>
</div>
<button type="submit">Add Recipe</button>
</form>
)
}


export default AddRecipeForm