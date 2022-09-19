import React from "react";
import Recipe from "./Recipe";

function RecipeFullList(props) {
  return props.recipesList.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />;
  });
}

export default RecipeFullList;
