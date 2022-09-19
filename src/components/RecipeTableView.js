import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import styles from "../css/RecipeTableView.module.css";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import Button from "react-bootstrap/Button";
import UserContext from "../store/UserProvider";
import RecipeDelete from "./RecipeDelete";
import { Alert } from "react-bootstrap";

function RecipeTableView(props) {
  const { isAuthorized } = useContext(UserContext);
  const [deleteGradeError, setDeleteGradeError] = useState("");

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
                {isAuthorized && (
                  <div className={styles.editContainer}>
                    <Button
                      variant="light"
                      onClick={() => {
                        props.onShow(recipe.id);
                      }}
                    >
                      <Icon path={mdiPencilOutline} size={1} color="#2b8a3e" />
                    </Button>
                    <RecipeDelete
                      onError={(error) => setDeleteGradeError(error)}
                      recipeId={recipe.id}
                    />
                  </div>
                )}
                {deleteGradeError && (
                  <Alert variant="danger">Error: {deleteGradeError}</Alert>
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
