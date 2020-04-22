import React, { useState, useContext, useEffect } from "react";
import { fnAddCoords, fnRmvCoords, fnGetCoords } from "../connects/mapConnect";
import { ContextApp } from "../context/Context";
import { fnCalTime, fnGetTime } from "../../lib/ApiTimer";

// Imágenes
import poopi from "../../public/images/poopi.png";

export const StartBtn = ({ children }) => {
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

  // *** Esta función previene que se guarde una ubicación si el usuario se sale *** //
  window.onbeforeunload = function () {
    console.log("adiós!!!");
    fnRmvCoords({ id: id });
  };

  //           *** CONFIGURACIONES DEL NAVIGATOR.GEOLOCATION
  //                    + FUNCIÓN QUE EXTRAE LA LOC DEL USER. ***
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  //          *** CONFIGURACIONES DE TIEMPO ***

  const [time, setTime] = useState(); // Controlador de on/off
  const [startP, setStartP] = useState(); // Tiempo de inicio
  const [endP, setEndP] = useState(); // Tiempo de fin
  const [hour, setHour] = useState();
  useEffect(() => {
    const t = fnGetTime();
    if (time == "start") {
      setStartP(t);
      const hour = t.hour;
      setHour(hour);
    } else if (time == "stop") {
      setEndP(t);
    }
  }, [time]);

  if (endP) {
    fnCalTime({ start: startP, end: endP, id: id, hour: hour }),
      setStartP(),
      setEndP(),
      setHour();
  }

  console.log("Start:", startP);
  console.log("End:", endP);
  //   const startChrono = () => {
  //     let milsc = t.();
  //     console.log(milsc);
  //   };

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
          /* Mando Cordenadas */
          fnAddCoords(coords);
          /* Actualizo contexto */
          upContext();
          /* Activo timer*/
          setTime("start");
        },
        (err) => {
          console.warn(`ERROR ${err.code}: ${err.message}`);
        },
        options
      );
    } else {
      setActiveBtn({ className: "startBtn" });
      fnRmvCoords({ id: id });
      setTime("stop");

      async () => {
        await upContext();
      };
    }
  }
  return (
    <>
      <div className="connect-box">
        <div className={activeBtn.className} onClick={() => track()}>
          <img src={poopi}></img>
        </div>
        <div>Push me!</div>
      </div>
      <div>{children}</div>
    </>
  );
};
