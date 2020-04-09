import React from "react";
import { Map } from "./views/map.page";
import { Geolocation } from "./components/geolocated";

export const App = () => {
  return (
    <>
      <h1>Hola</h1>
      <p>Esto es Pupap</p>
      <Geolocation />
      <Map />
    </>
  );
};
