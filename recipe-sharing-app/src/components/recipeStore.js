import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, recipeId])], // Avoid duplicates
    })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),
  generateRecommendations: () =>
    set(state => {
      // Example: Recommend recipes not yet favorited
      const recommended = state.recipes.filter(
        recipe => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
export default useRecipeStore;