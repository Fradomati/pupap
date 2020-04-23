import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

export const UserContext = React.createContext();

export const useUser = () => {
  const userState = useContext(UserContext);
  console.log("[MARC METHOD] User:", userState);
  return userState.user;
};

export const useUserIsLoading = () => {
  const userState = useContext(UserContext);
  return userState.loading;
};

const authConnect = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true,
});

export const fnSignup = async ({ username, password, email }) => {
  const response = await authConnect.post("/signup", {
    username,
    password,
    email,
  });

  console.log("[SIGNUP] Server dice:", response.data);
  console.log("Usuario Creado");

  return response.data;
};

export const fnLogin = async ({ username, password }) => {
  console.log("Estás haciendo un login de", username, "contraseña", password);
  const response = await authConnect.post("/login", {
    username,
    password,
  });
  console.log("[LOGIN] Server dice:", response.data);
  //   console.log("Usario Logeado");

  return response.data;
};

export const fnLogout = async () => {
  const response = await authConnect.post("/logout");
  console.log("[LOGOUT] Server dice:", response.data);

  return response.data;
};

export const fnWhoame = async () => {
  const response = await authConnect.post("/whoame");
  console.log("[WHOAME] Server dice:", response.data);

  return response.data;
};
