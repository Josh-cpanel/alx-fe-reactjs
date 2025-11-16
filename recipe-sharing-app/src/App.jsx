import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <SearchBar />
      <AddRecipeForm />

      <h2>All Recipes</h2>
      <RecipeList />

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}


export default function App() {
return (
<BrowserRouter>
<div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
<header style={{ marginBottom: 20 }}>
<h1>Recipe Sharing App</h1>
<nav>
<Link to="/">Home</Link>
</nav>
</header>


<main>
<Routes>
<Route path="/" element={(
<div>
<AddRecipeForm />
<RecipeList />
</div>
)} />


<Route path="/recipes/:id" element={<RecipeDetails />} />
<Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
</Routes>
</main>
</div>
</BrowserRouter>
)
}