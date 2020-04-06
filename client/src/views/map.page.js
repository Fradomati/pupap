import React, { useState } from "react";
import { HeatMap } from "../components/map";
import { TOKEN_API } from "/token_key";
import { LoadScript } from "@react-google-maps/api";

export const Map = () => {
  return (
    <LoadScript id="map-google-load" googleMapsApiKey={TOKEN_API()}>
      <HeatMap></HeatMap>
    </LoadScript>
  );
};
