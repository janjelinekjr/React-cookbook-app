import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../css/RecipeSmall.module.css";
import Icon from "@mdi/react";
import { mdiNutrition } from "@mdi/js";

function addNames(recipeIngredients, ingredientsMap) {
  return recipeIngredients.slice(0, 4).map((el) => {
    return {
      id: el.id,
      amount: el.amount,
      unit: el.unit,
      name: ingredientsMap[el.id],
    };
  });
}

function RecipeSmall(props) {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Card.Title className={styles.title}>
          <Icon
            className={styles.icon}
            path={mdiNutrition}
            size={1}
            color="#2b8a3e"
          />
          {props.recipe.name}
        </Card.Title>
        <Card.Img variant="top" src={props.recipe.imgUri} />
        <Card.Body>
          <div></div>
          <Card.Text className={styles.text}>
            {props.recipe.description.slice(0, 33) + "..."}
          </Card.Text>
          <div>
            <ul className={styles.text}>
              {addNames(props.recipe.ingredients, props.ingredients).map(
                (el, i) => {
                  return <li key={i}>{el.name}</li>;
                }
              )}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeSmall;
