import React, { useState } from "react";
import { MapView } from "../components/map/map";
import { TOKEN_API } from "/token_key";
import { LoadScript } from "@react-google-maps/api";
import { Geolocation } from "../components/map/geolocated";

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
