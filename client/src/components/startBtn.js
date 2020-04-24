import React, { useState, useContext, useEffect } from "react";
import { fnAddCoords, fnRmvCoords, fnGetCoords } from "../connects/mapConnect";
import { ContextApp } from "../context/Context";
import { fnCalTime, fnGetTime, random } from "../../lib/ApiTimer";
import { withRouter } from "react-router-dom";

// Imágenes
import poopi from "../../public/images/poopi.png";

export const StartBtn = withRouter(({ history, children }) => {
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

  // Frases de ánimo
  const [phrase, setPhrase] = useState(`¡Púlsame! Comparte tu "momento"`);
  const arrPhrases = [
    "¡Ánimo crack!",
    "El amor es más difícil que cagar en un frasquito",
    "Tenías la tortuga mordiendo tela, ¡ehm!",
    "Jordan colgando del aro ¿no?",
    "¿Acaso no caga el Papa?",
    "Al comer y al evacuar, prisa no te has de dar",
    "¡Hombre al agua!",
    "Deja de arrugar la cara, tómatelo con calma",
    "Desaloja al inquilino tranquilo",
    "Te vas a quitar un peso de encima",
    "Estás como las abejas, con el aguijón fuera...",
  ];

  const randomNum = random(arrPhrases.length);

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
      setPhrase(arrPhrases[randomNum]);
    } else if (time == "stop") {
      setEndP(t);
      history.push("/");
      window.location.reload();
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
  if (user) {
    return (
      <>
        <div className="connect-box">
          <div className={activeBtn.className} onClick={() => track()}>
            <img src={poopi}></img>
          </div>
          <div className="txt-animo">{phrase}</div>
        </div>
        <div>{children}</div>
      </>
    );
  } else {
    return (
      <>
        <div className="initial-box">
          <div className="logo">
            <img src={poopi}></img>
          </div>
          <div className="title-initial">
            <h1>Poopapp</h1>
            <p>Disfruta tu momento</p>
          </div>
        </div>
        <div>{children}</div>
      </>
    );
  }
});
