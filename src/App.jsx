import React, { createContext, useState } from "react";
import Router from "./Router";

export const AdminContext = createContext(null);

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      <Router />
    </AdminContext.Provider>
  );
};

AdminContext.displayName = "AdminContext";

export default App;
