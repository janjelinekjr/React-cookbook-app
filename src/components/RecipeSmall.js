import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../css/CardSmall.module.css";
import Icon from "@mdi/react";
import { mdiNutrition } from "@mdi/js";

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
              <li>{props.ingredient[0]}</li>
              <li>{props.ingredient[1]}</li>
              <li>{props.ingredient[2]}</li>
              <li>{props.ingredient[3]}</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeSmall;
