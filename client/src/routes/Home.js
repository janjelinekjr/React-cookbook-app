import styles from "../css/App.module.css";
import React from "react";
import NavbarContainer from "../components/NavbarContainer";

function Home() {
  return (
    <div className={styles.app}>
      <NavbarContainer />
      <div>TODO Home</div>;
    </div>
  );
}

export default Home;
