import React, { useState, useContext } from "react";
import { fnAddCoords, fnRmvCoords, fnGetCoords } from "../connects/mapConnect";
import { fnWhoame } from "../connects/authConnect";
import { ContextApp } from "../context/Context";

// Imágenes
import poopi from "../../public/images/poopi.png";

export const StartBtn = () => {
  //            *** DATOS PARA SABER LA _ID DEL USER ACTUAL ***
  // Me traiego el usuario del contexto para sacar su ID y pasarselo al Back.
  const { user, setUser, activeBtn, setActiveBtn, upContext } = useContext(
    ContextApp
  );

  // **** Función para obtener la posición del user y mandarlo al back.
  let id;

  // Hago una copia porque no me dejaba sacar el _id.

  const userCopy = { ...user };
  id = userCopy._id;

  console.log("[MAPA] User Context:", user);

  //           *** CONFIGURACIONES DEL NAVIGATOR.GEOLOCATION
  //                    + FUNCIÓN QUE EXTRAE LA LOC DEL USER. ***
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // Tomo mi posición Actual y la mando a la BBDD.
  function track() {
    if (activeBtn.className == "startBtn") {
      setActiveBtn({ className: "startBtn active" });
      console.log("Posición actual:");
      navigator.geolocation.getCurrentPosition(
        function success(pos) {
          console.log(pos);
          let latitude = pos.coords.latitude;
          let longitude = pos.coords.longitude;
          let coords = { id: id, lat: latitude, lng: longitude };
          fnAddCoords(coords);
          console.log("Lo que paso al back", coords);
        },
        (err) => {
          console.warn(`ERROR ${err.code}: ${err.message}`);
        },
        options
      );
    } else {
      setActiveBtn({ className: "startBtn" });
      fnRmvCoords({ id: id });
      async () => {
        await upContext();
      };
    }
  }
  return (
    <div className="connect-box">
      <div className={activeBtn.className} onClick={() => track()}>
        <img src={poopi}></img>
      </div>
    </div>
  );
};
