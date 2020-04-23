import React, { createContext, useState, useEffect } from "react";
import { fnWhoame } from "../connects/authConnect";
import { fnGetCoords } from "../connects/mapConnect";
import { popularCnt } from "../connects/cntConnect";
export const ContextApp = createContext();

export const ContextAppProvider = (props) => {
  //          *** [USER CONTEXT TO LOGIN] ***
  const [user, setUser] = useState();

  //                *** [USER LOGGED?] ***
  //  ***Creo que no lo uso correnctamente***
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

  // Context update

  const upContext = async () => {
    const currentUser = await fnWhoame();
    setUser(currentUser);
    return currentUser;
  };

  //                *** [DESIGN-MENU] ***
  //  Control de apertura de Menu
  const [openMenu, setOpenMenu] = useState({
    className: "container",
    classNameNav: "",
  });

  //                *** [DESIGN-MENU] ***
  //  Control de apertura de Menu
  const [activeBtn, setActiveBtn] = useState({
    className: "startBtn",
  });

  //                *** [SHOW-USERS-MAP] ***
  //  Control de Usuarios Contectados
  const [mates, setMates] = useState(async () => {
    // Con esto te carga todos los usuarios en el contexto.
    try {
      const currentMates = await fnGetCoords();
      setMates(currentMates);
    } catch (error) {
      setMates(null);
    }
  });

  //                *** [SHOW-CONTENT-DEFAULT ***
  const [content, setContent] = useState(async () => {
    try {
      const defaultContent = await popularCnt();
      setContent(defaultContent);
    } catch (err) {
      console.log("[CONTEXTO] El estado ha dado este error", err);
    }
  });

  return (
    <ContextApp.Provider
      value={{
        user,
        setUser,
        openMenu,
        setOpenMenu,
        activeBtn,
        setActiveBtn,
        mates,
        setMates,
        content,
        setContent,
        upContext,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
};
