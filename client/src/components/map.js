import React, { useState, useContext } from "react";
import { GoogleMap, MarkerClusterer, Marker } from "@react-google-maps/api";
import { ContextApp } from "../context/Context";

export const MapView = () => {
  const { mates, user } = useContext(ContextApp);
  const size = {
    height: "100vh",
    width: "100vw",
  };

  /// *** POSICIÓN ACTUAL DEL USER ***

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

  //      *** REQUISITOS PARA CENTRAR EL MAPA ***
  const zoom = 15;
  const center = centerUser[0];

  return (
    <GoogleMap
      id="wrapper-google-map"
      mapContainerStyle={size}
      zoom={zoom}
      center={center}
    >
      <>
        <MarkerClusterer>
          {(clusterer) => {
            //console.log("clusterer:", clusterer);
            return data.map((poop, index) => {
              return (
                <Marker
                  key={index}
                  position={{ lat: poop.lat, lng: poop.lng }}
                ></Marker>
              );
            });
          }}
        </MarkerClusterer>
      </>
    </GoogleMap>
  );
};
