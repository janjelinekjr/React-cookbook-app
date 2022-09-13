import styles from "./css/App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import recipes from "./recipes";
import RecipesList from "./components/RecipesList";

const recipesList = recipes;

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Kuchařka</h1>
      <RecipesList recipesList={recipesList} />
    </div>
  );
}

export default App;
