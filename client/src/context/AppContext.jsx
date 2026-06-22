// src/context/AppContext.jsx

import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const favoriteMovies = [];

  return (
    <AppContext.Provider value={{ favoriteMovies }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);