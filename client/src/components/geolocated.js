import React, { useState, useContext } from "react";
import { fnAddCoords, fnGetCoords } from "../connects/mapConnect";
import { ContextApp } from "../context/Context";

export const Geolocation = () => {
  const [geo, setPosition] = useState({ lat: 0, lng: 0 });
  let id;

  //            *** DATOS PARA SABER LA _ID DEL USER ACTUAL ***
  // Me traiego el usuario del contexto para sacar su ID y pasarselo al Back.
  const { user } = useContext(ContextApp);

  // Hago una copia porque no me dejaba sacar el _id.

  const userCopy = { ...user };
  id = userCopy._id;

  //           *** CONFIGURACIONES DEL NAVIGATOR.GEOLOCATION
  //                    + FUNCIÓN QUE EXTRAE LA LOC DEL USER. ***
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // Tomo mi posición Actual y la mando a la BBDD.
  function track() {
    navigator.geolocation.getCurrentPosition(
      function success(pos) {
        console.log(pos);
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        let coords = { id: id, lat: latitude, lng: longitude };
        setPosition(coords);
        fnAddCoords(coords);
        console.log("Lo que paso al back", coords);
      },
      (err) => {
        console.warn(`ERROR ${err.code}: ${err.message}`);
      },
      options
    );
  }

  return (
    <div>
      <button type="button" onClick={() => track()}>
        Dame mi posición
      </button>
      <button type="button" onClick={() => fnGetCoords()}>
        Dame Posiciones
      </button>
      <ul>
        <li>Latitude > {geo.lat}</li>
        <li>Longitude > {geo.lng}</li>
      </ul>
    </div>
  );
};
