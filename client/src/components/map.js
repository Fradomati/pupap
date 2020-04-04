import React, { useState } from "react";
import { TOKEN_API } from "/token_key";

export const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return <div>Aquí va el mapa</div>;
};
