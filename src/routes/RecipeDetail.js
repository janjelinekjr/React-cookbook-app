import styles from "../css/App.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function RecipeDetail() {
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
      <div>TODO RecipeDetail</div>;
    </div>
  );
}

export default RecipeDetail;
