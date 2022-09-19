import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../css/NavbarContainer.module.css";
import Button from "react-bootstrap/Button";
import UserContext from "../store/UserProvider";

function NavbarContainer() {
  const { isAuthorized, handleLoggin } = useContext(UserContext);

  return (
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
          <Button onClick={handleLoggin} variant="secondary">
            {isAuthorized ? "Odhlásit" : "Přihlásit"}
          </Button>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
