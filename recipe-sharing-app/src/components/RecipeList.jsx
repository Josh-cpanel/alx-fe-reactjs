import { Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'


const RecipeList = () => {
const recipes = useRecipeStore((state) => state.recipes)


if (!recipes || recipes.length === 0) return <p>No recipes yet. Add one!</p>


return (
<div>
{recipes.map((recipe) => (
<div key={recipe.id} style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '8px' }}>
<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
<Link to={`/recipes/${recipe.id}`}>View details</Link>
</div>
))}
</div>
)
}


export default RecipeList