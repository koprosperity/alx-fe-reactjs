import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Sharing App
      </h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;