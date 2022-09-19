import React, { useContext, useState } from "react";
import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "react-bootstrap/Button";
import ConfirmationDelete from "./ConfirmationDelete";
import FetchDataContext from "../store/FetchDataProvider";

function RecipeDelete({ recipeId, onDelete, onError }) {
  const { isDataUpdated, setIsDataUpdated } = useContext(FetchDataContext);
  const [deleteRecipeCall, setDeleteRecipeCall] = useState({
    state: "inactive",
  });

  const handleDelete = async () => {
    if (deleteRecipeCall.state === "pending") {
      return setDeleteRecipeCall({ state: "pending" });
    }

    const res = await fetch(`http://localhost:3000/recipe/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: recipeId,
      }),
    });

    const data = await res.json();

    if (res.status >= 400) {
      setDeleteRecipeCall({ state: "error", data });
      if (typeof onError === "function") {
        onError(data.errorMessage);
      }
    } else {
      setDeleteRecipeCall({ state: "success", data });
      setIsDataUpdated(!isDataUpdated);
      if (typeof onDelete === "function") {
        onDelete(recipeId);
      }
    }
  };

  return (
    <ConfirmationDelete
      title="Smazat recept"
      message="Opravdu chcete smazat daný recept?"
      confirmText="Smazat"
      onConfirm={handleDelete}
    >
      <Button variant="light">
        <Icon
          path={mdiTrashCanOutline}
          size={1}
          style={{ cursor: "pointer", color: "red" }}
        />
      </Button>
    </ConfirmationDelete>
  );
}

export default RecipeDelete;
