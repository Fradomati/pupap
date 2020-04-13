import React, { createContext, useState, useEffect } from "react";
import { fnWhoame } from "../connects/authConnect";
export const ContextApp = createContext();

export const ContextAppProvider = props => {
  const [user, setUser] = useState();
  console.log("El usuario actual:", user);

  // [USER LOGGED?] ***Creo que no lo uso correnctamente***
  // Uso el UseEffect para gestionar si el usuario está o no logeado.
  useEffect(() => {
    (async () => {
      try {
        const currentUser = await fnWhoame();
        setUser(currentUser);
        console.log("[CONTEXTO WHOAME] El usuario actual es:", currentUser);
      } catch (error) {
        console.log("Error en CONTEXTO WHOAME:", error);
        setUser(null);
      }
    })();
  }, []);

  // [DESIGN-MENU] Control de apertura de Menu
  const [openMenu, setOpenMenu] = useState({
    className: "container",
    classNameNav: ""
  });

  // [SHOW-USERS-MAP] Control de Usuarios Contectados

  //   const [onlineUsers, setOnlineUsers] = useState(() => {
  //       (async () => {
  //           try {

  //           }
  //       })
  //   });

  return (
    <ContextApp.Provider value={{ user, setUser, openMenu, setOpenMenu }}>
      {props.children}
    </ContextApp.Provider>
  );
};