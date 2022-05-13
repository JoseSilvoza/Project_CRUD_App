import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const addRecipe = (newRecipe) => {
    setRecipes((curRecipes) => [...curRecipes, newRecipe])
  }
  
  const deleteRecipe = (recipesIndexToDelete) => {
    setRecipes((temp) => temp.filter((recipe, index) => index !== recipesIndexToDelete))
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;