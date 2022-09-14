import React from "react";
import Table from "react-bootstrap/Table";
import styles from "../css/RecipeTableView.module.css";

function RecipeTableView(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th className={styles.text}>Název</th>
          <th className={styles.text}>ID</th>
          <th className={styles.text}>Počet ingrediencí</th>
        </tr>
      </thead>
      <tbody>
        {props.recipesList.map((recipe) => {
          return (
            <tr key={recipe.id}>
              <td className={styles.text}>{recipe.name}</td>
              <td className={styles.text}>{recipe.id}</td>
              <td className={styles.text}>{recipe.ingredients.length}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default RecipeTableView;
