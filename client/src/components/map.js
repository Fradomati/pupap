import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const MapBox_token =
  "pk.eyJ1Ijoic3Jib3IiLCJhIjoiY2s4a2pwc251MDFtejNubnp6NTgxeXRybCJ9.P4Yku1rTTf4WNS_drkpLrA";
export const Map = () => {
  const [viewport, setViewPort] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGl
      {...viewport}
      onViewportChange={setViewPort}
      mapboxApiAccessToken={MapBox_token}
    />
  );
};
