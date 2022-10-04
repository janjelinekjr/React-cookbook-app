import React, { createContext, useEffect, useState } from "react";

const FetchDataContext = createContext();

export function FetchDataProvider(props) {
  const [recipesLoadCall, setRecipesLoadCall] = useState({ state: "pending" });
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  // fetching data (recipes and ingredients)
  useEffect(() => {
    fetch("https://cookbook-app-server.herokuapp.com/recipe/list", {
      method: "GET",
    }).then(async (response) => {
      const responseJSON = await response.json();
      if (response.status >= 400) {
        setRecipesLoadCall({ state: "error", error: responseJSON });
      } else {
        setRecipesLoadCall({ state: "success", data: responseJSON });
      }
    });
  }, [isDataUpdated]);

  const value = {
    recipesLoadCall,
    setRecipesLoadCall,
    isDataUpdated,
    setIsDataUpdated,
  };

  return (
    <FetchDataContext.Provider value={value}>
      {props.children}
    </FetchDataContext.Provider>
  );
}

export default FetchDataContext;
