import React from "react";
// Falta importar axios para mandar la info al back.

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  return crd;
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
