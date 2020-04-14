import axios from "axios";

const authConnect = axios.create({
  baseURL: "http://localhost:3000/location",
  withCredentials: true,
});

// [MAP] Add Coordinates
export const fnAddCoords = async (coords) => {
  const response = await authConnect.post("/add", coords);
  console.log("[MAP] La función de fnAddCoods devuelve:", coords);
  return response.data;
};

//[MAP] Get all coordinates

export const fnGetCoords = async () => {
  const response = await authConnect.get("/getLocations");
  //Paso el Array de Objetos con las coordenadas
  const allCoords = response.data.locations[0].coordinates;
  console.log("[MAP] La función de fnGetCoords devuevle", allCoords);
  return allCoords;
};
