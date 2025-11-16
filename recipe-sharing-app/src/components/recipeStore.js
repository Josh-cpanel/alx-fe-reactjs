import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  // === TASK 0 & 1 ===
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id), // cleanup
    })),

  // === TASK 2 (Search) ===
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // === NEW TASK — FAVORITES ===
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  toggleFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites.filter((id) => id !== recipeId)
        : [...state.favorites, recipeId],
    })),

  // === NEW TASK — RECOMMENDATIONS ===
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) {
        return { recommendations: [] };
      }

      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );

      // Simple mock recommendation: pick recipes with similar words OR random picks
      const favoriteKeywords = favoriteRecipes.flatMap((r) =>
        r.title.toLowerCase().split(' ')
      );

      const recommended = state.recipes.filter((recipe) => {
        const words = recipe.title.toLowerCase().split(' ');
        return words.some((word) => favoriteKeywords.includes(word));
      });

      return { recommendations: recommended };
    }),
}));
