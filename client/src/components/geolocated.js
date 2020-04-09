import React, { useState } from "react";

export const Geolocation = () => {
  const [geo, setPosition] = useState({ lat: 0, lng: 0 });

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function track() {
    console.log("Posición actual:");
    navigator.geolocation.getCurrentPosition(
      function success(pos) {
        console.log(pos);
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        setPosition({ lat: latitude, lng: longitude });
      },
      err => {
        console.warn(`ERROR ${err.code}: ${err.message}`);
      },
      options
    );
  }

  return (
    <div>
      <button type="button" onClick={() => track()}>
        Dame mi posición
      </button>
      <ul>
        <li>Latitude > {geo.lat}</li>
        <li>Longitude > {geo.lng}</li>
      </ul>
    </div>
  );
};
