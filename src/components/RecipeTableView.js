import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import styles from "../css/RecipeTableView.module.css";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import Button from "react-bootstrap/Button";
import UserContext from "../store/UserProvider";

function RecipeTableView(props) {
  const { isAuthorized } = useContext(UserContext);

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
              <td className={styles.text}>
                {recipe.name}{" "}
                {isAuthorized ? (
                  <Button
                    variant="light"
                    onClick={() => {
                      props.onShow(recipe.id);
                    }}
                  >
                    <Icon path={mdiPencilOutline} size={1} color="#2b8a3e" />
                  </Button>
                ) : (
                  ""
                )}
              </td>
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
