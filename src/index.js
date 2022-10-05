import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./routes/RecipeList";
import RecipeDetail from "./routes/RecipeDetail";
import IngredientList from "./routes/IngredientList";
import { UserProvider } from "./store/UserProvider";
import { FetchDataProvider } from "./store/FetchDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FetchDataProvider>
      <UserProvider>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/home" element={<App />} />
            <Route path="/recipeList" element={<RecipeList />} />
            <Route path="/recipeDetail" element={<RecipeDetail />} />
            <Route path="/ingredientList" element={<IngredientList />} />
          </Routes>
        </HashRouter>
      </UserProvider>
    </FetchDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
