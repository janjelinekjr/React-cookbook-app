import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../css/Recipe.module.css";
import Icon from "@mdi/react";
import { mdiNutrition } from "@mdi/js";

function Recipe(props) {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Card.Img variant="top" src={props.recipe.imgUri} />
        <Card.Body>
          <div className={styles.container}>
            <Card.Title className={styles.title}>
              <Icon
                className={styles.icon}
                path={mdiNutrition}
                size={1}
                color="#2b8a3e"
              />
              {props.recipe.name}
            </Card.Title>
          </div>
          <Card.Text className={styles.text}>
            {props.recipe.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Recipe;
