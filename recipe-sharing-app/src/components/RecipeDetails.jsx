import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'


const RecipeDetails = () => {
const { id } = useParams()
const recipeId = Number(id)


const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId))


if (!recipe) return (
<div>
<p>Recipe not found.</p>
<Link to="/">Back to list</Link>
</div>
)


return (
<div>
<h1>{recipe.title}</h1>
<p>{recipe.description}</p>


<div style={{ marginTop: 12 }}>
<Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
<DeleteRecipeButton id={recipe.id} />
</div>


<div style={{ marginTop: 16 }}>
<Link to="/">Back to list</Link>
</div>
</div>
)
}


export default RecipeDetails