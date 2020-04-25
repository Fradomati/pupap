import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, MarkerClusterer, Marker } from "@react-google-maps/api";
import { ContextApp } from "../context/Context";
import { useUser } from "../connects/authConnect";

// Style map
import { darkMap, darkMap2 } from "../../public/darkmap";

// Imágenes
import on from "../../public/images/on.png";

export const MapView = () => {
  const { mates, user, upContext } = useContext(ContextApp);
  const [userCenter, setUserCenter] = useState();
  const size = {
    height: "100vh",
    width: "100vw",
  };

  const optionsMap = {
    styles: darkMap2,
  };

  /// *** POSICIÓN ACTUAL DEL USER ***

  const usuario = useUser();

  const currentUser = { ...user };
  const getArr = currentUser.coordinates;
  const centerUser = { ...getArr };

  //  *** FUNCIÓN PARA CONSTRUIR DATA - QUE MUESTRA LOS MATES ***
  const copyMates = { ...mates }; // 1º Hago una copia

  const preData = []; // Arrays con Objetos dentro, yo solo quiero un único Array de Objetos
  const data = []; // Array de Objeto único.
  Object.values(copyMates).map((e) => preData.push(e.coordinates)); // 2º Lo paso a Array
  preData.map((e) => {
    // 3º Vuelvo a pasar los Objetos a Array
    if (e[0]) data.push(e[0]);
  });

  useEffect(() => {
    upContext();
    setUserCenter(centerUser[0]);
  }, [userCenter]);
  //      *** REQUISITOS PARA CENTRAR EL MAPA ***
  const zoom = 15;
  const center = centerUser[0];

  if (!user) {
    return <div>Cargando</div>;
  }
  // } else if () {
  //   return <div>Necesitas estar conectado</div>;
  // } else {
  else {
    return (
      <GoogleMap
        id="wrapper-google-map"
        mapContainerStyle={size}
        zoom={zoom}
        center={center}
        options={optionsMap}
      >
        <>
          <MarkerClusterer>
            {(clusterer) => {
              console.log("clusterer:", clusterer);
              return data.map((poop, index) => {
                return (
                  <Marker
                    icon={on}
                    key={index}
                    position={{ lat: poop.lat, lng: poop.lng }}
                    clusterer={clusterer}
                  ></Marker>
                );
              });
            }}
          </MarkerClusterer>
        </>
      </GoogleMap>
    );
  }
};
// };
