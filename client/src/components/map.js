import React, { useState } from "react";
import { TOKEN_API } from "/token_key";
import { GoogleMap, MarkerClusterer, Marker } from "@react-google-maps/api";

const position = { lat: 40.4233335, lng: -3.7593634 };

export const HeatMap = () => {
  const size = {
    height: "100vh",
    width: "100vw"
  };

  const zoom = 7;

  const center = position;

  const data = [
    { lat: 38, lng: -4.1 },
    { lat: 38, lng: -4.2 },
    { lat: 38, lng: -4.3 },
    { lat: 38, lng: -4.4 },
    { lat: 38, lng: -4.5 },
    { lat: 38, lng: -4.6 }
  ];

  const onLoad = heatmapLayer => {
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
          {clusterer => {
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
