import React from "react";
import Recipe from "./Recipe";

function RecipesList(props) {
  function getRecipesList(allRecipes) {
    return allRecipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });
  }

  return getRecipesList(props.recipesList);
}

export default RecipesList;
