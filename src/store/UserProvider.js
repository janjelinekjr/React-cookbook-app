import React, { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleLoggin = () => {
    setIsAuthorized(!isAuthorized);
  };

  const value = {
    isAuthorized,
    handleLoggin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UserContext;
