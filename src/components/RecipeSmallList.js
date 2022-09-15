import React from "react";
import RecipeSmall from "./RecipeSmall";

function RecipeSmallList(props) {
  const ingredients = props.ingredientsList;

  return props.recipesList.map((recipe) => {
    return (
      <RecipeSmall
        key={recipe.id}
        recipe={recipe}
        ingredients={ingredients}
        // // ingredientsId={ingredients.find((ing) => ing.id === recipe.id)}
        // ingredient={ingredients.map((i) => [i.name])}
      />
    );
  });
}

export default RecipeSmallList;
