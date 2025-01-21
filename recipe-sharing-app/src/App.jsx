import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <h1>Recipe Sharing App</h1>
        </div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </Router>
      <div className="p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Recipe Sharing App
        </h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </>
  );
};

export default App;