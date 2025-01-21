import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 mb-2">
          <h3 className="text-xl font-bold">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;