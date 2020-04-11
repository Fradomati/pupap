import React, { createContext, useState, useEffect } from "react";

export const ContextApp = createContext();

export const ContextAppProvider = props => {
  const [user, setUser] = useState();
  console.log("El usuario actual:", user);

  const [openMenu, setOpenMenu] = useState({
    className: "container",
    classNameNav: ""
  });

  // la idea es poner aquí ambas clases
  return (
    <ContextApp.Provider value={{ user, setUser, openMenu, setOpenMenu }}>
      {props.children}
    </ContextApp.Provider>
  );
};
