import { useRecipeStore } from '../store/recipeStore'
import { useNavigate } from 'react-router-dom'


const DeleteRecipeButton = ({ id }) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
const navigate = useNavigate()


const handleDelete = () => {
if (!confirm('Delete this recipe?')) return
deleteRecipe(id)
navigate('/')
}


return (
<button onClick={handleDelete}>Delete</button>
)
}


export default DeleteRecipeButton