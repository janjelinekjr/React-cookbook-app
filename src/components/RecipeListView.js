import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Icon from "@mdi/react";
import { mdiGrid, mdiListBoxOutline } from "@mdi/js";
import RecipeFullList from "./RecipeFullList";
import RecipeSmallList from "./RecipeSmallList";

function RecipeListView(props) {
  const [viewType, setViewType] = useState("full");
  const isFull = viewType === "full";

  function viewHandler() {
    if (isFull) {
      setViewType("small");
    } else {
      setViewType("full");
    }
  }

  return (
    <div>
      <Navbar bg="light">
        <div className="container-fluid">
          <Navbar.Brand>Zobrazení</Navbar.Brand>
          <Button variant="outline-primary" onClick={viewHandler}>
            <Icon path={isFull ? mdiGrid : mdiListBoxOutline} size={1} />
            {isFull ? "Small" : "Full"}
          </Button>
        </div>
      </Navbar>
      {isFull ? (
        <RecipeFullList recipesList={props.recipesList} />
      ) : (
        <RecipeSmallList recipesList={props.recipesList} />
      )}
    </div>
  );
}

export default RecipeListView;
