import React, { useContext } from "react";
import { Header } from "./Header";
import { StartBtn } from "../components/startBtn";
import { ContextApp } from "../context/Context";

export const Layout = ({ children }) => {
  const { openMenu, setOpenMenu } = useContext(ContextApp);
  console.log(openMenu);
  return (
    <>
      <div className={openMenu.className}>
        <StartBtn />
        <Header />
        <div className="body-container">{children}</div>
      </div>
    </>
  );
};
