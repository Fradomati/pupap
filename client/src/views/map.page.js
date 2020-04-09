import React, { useState } from "react";
import { MapView } from "../components/map";
import { TOKEN_API } from "/token_key";
import { LoadScript } from "@react-google-maps/api";
import { Geolocation } from "../components/geolocated";

export const Map = () => {
  return (
    <>
      <Geolocation />
      <LoadScript id="map-google-load" googleMapsApiKey={TOKEN_API()}>
        <MapView></MapView>
      </LoadScript>
    </>
  );
};
