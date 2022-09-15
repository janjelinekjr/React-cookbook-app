import React, { useState, useMemo } from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiTable, mdiListBoxOutline, mdiMagnify } from "@mdi/js";
import RecipeListView from "./RecipeListView";
import RecipeTableView from "./RecipeTableView";

function RecipesList(props) {
  const [viewType, setViewType] = useState("list");
  const isList = viewType === "list";
  const [searchBy, setSearchBy] = useState("");

  function viewHandler() {
    if (isList) {
      setViewType("table");
    } else {
      setViewType("list");
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    setSearchBy(event.target["searchInput"].value);
  }

  function handleSearchDelete(event) {
    if (!event.target.value) setSearchBy("");
  }

  const filteredRecipes = useMemo(() => {
    return props.recipesList.filter((input) => {
      return (
        input.name.toLowerCase().includes(searchBy.toLowerCase()) ||
        input.description.toLowerCase().includes(searchBy.toLowerCase())
      );
    });
  }, [searchBy, props.recipesList]);

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="light">
        <div className="container-fluid">
          <Navbar.Brand>Seznam receptů</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ justifyContent: "right" }}>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                id={"searchInput"}
                style={{ maxWidth: "150px" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchDelete}
              />
              <Button
                style={{ marginRight: "8px" }}
                variant="outline-success"
                type="submit"
              >
                <Icon size={1} path={mdiMagnify} />
              </Button>
              <Button variant="outline-primary" onClick={viewHandler}>
                <Icon path={isList ? mdiTable : mdiListBoxOutline} size={1} />
                {isList ? "Tabulka" : "List"}
              </Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div>
        {filteredRecipes.length ? (
          <div>
            <div className={"d-block d-md-none"}>
              <RecipeListView
                recipesList={filteredRecipes}
                ingredientsList={props.ingredientsList}
              />
            </div>
            <div className={"d-block d-md-block"}>
              {isList ? (
                <RecipeListView
                  recipesList={filteredRecipes}
                  ingredientsList={props.ingredientsList}
                />
              ) : (
                <RecipeTableView recipesList={filteredRecipes} />
              )}
            </div>
          </div>
        ) : (
          <div>No recipes</div>
        )}
      </div>
    </div>
  );
}

export default RecipesList;
