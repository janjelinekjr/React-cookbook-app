import React from "react";
import RecipeSmall from "./RecipeSmall";

function RecipeSmallList(props) {
  return props.recipesList.map((recipe) => {
    return <RecipeSmall key={recipe.id} recipe={recipe} />;
  });
}

export default RecipeSmallList;
