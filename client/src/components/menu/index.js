import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { ContextApp } from "../../context/Context";
import { fnLogout, fnWhoame } from "../../connects/authConnect";

export const MainMenu = withRouter(({ history }) => {
  const { user, setUser, openMenu, setOpenMenu } = useContext(ContextApp);
  const pushMenu = () => {
    if (
      (openMenu.className = "container-menu" && openMenu.classNameNav == "")
    ) {
      setOpenMenu({
        className: "container-menu menu-open",
        classNameNav: "open",
      });
    } else {
      setOpenMenu({ className: "container-menu", classNameNav: "" });
    }
  };

  const doLogout = async () => {
    await fnLogout();
    setUser(null);
    history.push("/auth/login");
  };

  return (
    <div className="nav-bar">
      <ul id="nav" className={openMenu.classNameNav}>
        <li className="toggle" onClick={() => pushMenu()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </li>
        {user && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Ver Mapa</Link>
            </li>
            <li>
              <Link to="/content">Enjoy!</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  doLogout();
                  console.log("Hacer Logout");
                }}
              >
                Logout
              </Link>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <Link to="/auth/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/auth/signup">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
});
