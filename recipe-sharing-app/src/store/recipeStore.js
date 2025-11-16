import create from 'zustand'


export const useRecipeStore = create((set) => ({
recipes: [
// Example starter content — optional
{ id: 1, title: 'Spiced Jollof Rice', description: 'A one-pot West African classic.' },
{ id: 2, title: 'Avocado Toast', description: 'Quick breakfast with mashed avocado and pepper.' }
],


// Add a recipe
addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),


// Update an existing recipe (by id)
updateRecipe: (updatedRecipe) =>
set((state) => ({
recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r))
})),


// Delete by id
deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


// Replace set of recipes (initialize)
setRecipes: (recipes) => set({ recipes })
}))