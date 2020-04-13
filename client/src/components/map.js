import React, { useState, useContext } from "react";
import { GoogleMap, MarkerClusterer, Marker } from "@react-google-maps/api";
import { ContextApp } from "../context/Context";

export const MapView = () => {
  const { mates } = useContext(ContextApp);
  const size = {
    height: "100vh",
    width: "100vw",
  };

  const copyMates = { ...mates };

  console.log(
    "[MAPAS] Esto es lo que trae el contexto",
    copyMates.coordinates[0].lat
  );

  const position = {
    lat: copyMates.coordinates[0].lat,
    lng: copyMates.coordinates[0].lng,
  };
  const zoom = 7;

  const center = position;

  const data = [
    position,
    { lat: 38, lng: -4.2 },
    { lat: 38, lng: -4.3 },
    { lat: 38, lng: -4.4 },
    { lat: 38, lng: -4.5 },
    { lat: 38, lng: -4.6 },
  ];

  const onLoad = (heatmapLayer) => {
    console.log("HeatmapLayer onLoad heatampLayer:", heatmapLayer);
  };

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
            console.log("clusterer:", clusterer);
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
