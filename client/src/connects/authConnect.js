import axios from "axios";

const authConnect = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
});

export const fnSignup = async ({ username, password, email }) => {
  const response = await authConnect.post("/signup", {
    username,
    password,
    email
  });

  console.log("Server dice:", response.data);
  console.log("Usuario Creado");

  return response.data;
};

export const fnLogin = async ({ username, password }) => {
  console.log("Estás haciendo un login de", username, "contraseña", password);
  const response = await authConnect.post("/login", {
    username,
    password
  });
  console.log("Server dice:", response.data);
  //   console.log("Usario Logeado");

  return response.data;
};
