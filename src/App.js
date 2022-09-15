import React, { useState, useEffect } from "react";
import styles from "./css/App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import RecipesList from "./components/RecipesList";
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  const [recipesLoadCall, setRecipesLoadCall] = useState({ state: "pending" });
  const [ingredientsLoadCall, setIngredientsLoadCall] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/recipe/list", { method: "GET" }).then(
      async (response) => {
        const responseJSON = await response.json();
        if (response.status >= 400) {
          setRecipesLoadCall({ state: "error", error: responseJSON });
        } else {
          setRecipesLoadCall({ state: "success", data: responseJSON });
        }
      }
    );
  }, []);

  function prepareIngredientsMap(ingredients) {
    const result = {};
    ingredients.forEach((element) => {
      result[element.id] = element.name;
    });
    return result;
  }

  useEffect(() => {
    fetch("http://localhost:8000/ingredient/list", { method: "GET" }).then(
      async (response) => {
        const responseJson = await response.json();
        if (response.status <= 400) {
          const ingredientsMap = prepareIngredientsMap(responseJson);
          setIngredientsLoadCall(ingredientsMap);
        }
      }
    );
  }, []);

  function getChild() {
    switch (recipesLoadCall.state) {
      case "pending":
        return (
          <div className={styles.loading}>
            <Icon size={2} path={mdiLoading} spin={true} />
            <p>Loading...</p>
          </div>
        );
      case "success":
        return (
          <div className={styles.app}>
            <h1 className={styles.heading}>Kuchařka</h1>
            <RecipesList
              recipesList={recipesLoadCall.data}
              ingredientsList={ingredientsLoadCall}
            />
          </div>
        );
      case "error":
        return (
          <div className={styles.error}>
            <div>Nepodařilo se načíst data o třídě.</div>
            <br />
            <pre>{JSON.stringify(recipesLoadCall.error, null, 2)}</pre>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className={styles.app}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className={styles.navTitle} to="/">
            Recepty.js
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className={styles.navContainer}>
                <Link className={styles.nav} to="/home">
                  Home
                </Link>
                <Link className={styles.nav} to="/recipeList">
                  Recepty
                </Link>
                <Link className={styles.nav} to="/ingredientList">
                  Ingredience
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{getChild()}</div>
      {/*<Outlet />*/}
    </div>
  );
}

export default App;
