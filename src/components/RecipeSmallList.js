import React from "react";
import RecipeSmall from "./RecipeSmall";

function RecipeSmallList(props) {
  const ingredients = props.ingredientsList;

  return props.recipesList.map((recipe) => {
    return (
      <RecipeSmall key={recipe.id} recipe={recipe} ingredients={ingredients} />
    );
  });
}

export default RecipeSmallList;
