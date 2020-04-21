import React from "react";

// Icónos

import bra from "../../public/images/brain.svg";
import chr from "../../public/images/chrono.svg";
import cal from "../../public/images/cal.svg";

export const Home = () => {
  return (
    <div>
      <div className="data-container">
        <div className="data-box">
          <div className="title chr">
            <img src={chr} className="data-icon chr" />
            <p>Tus tiempos</p>
          </div>
          <div className="data-text">
            <div>
              <p>Último momento</p>
              <p>00h:00min:00sc</p>
            </div>
            <div>
              <p>Total momentos</p>
              <p>00h:00min:00sc</p>
            </div>
          </div>
        </div>
        <div className="data-box">
          <div className="title cal">
            <img src={cal} className="data-icon cal" />
            <p>Tu calendario</p>
          </div>
          <div className="data-text">
            <div>
              <p>Media Diaria</p>
              <p>00h:00min:00sc</p>
            </div>
            <div>
              <p>Día Favorito</p>
              <p>00h:00min:00sc</p>
            </div>
            <div>
              <p>Hora Media</p>
              <p>00h:00min:00sc</p>
            </div>
          </div>
        </div>
        <div className="data-box">
          <div className="title bra">
            <img src={bra} className="data-icon bra" />
            <p>De interés</p>
          </div>
          <div className="data-text">
            <div>
              <p>Sabías que....</p>
              <p>00h:00min:00sc</p>
            </div>
          </div>
        </div>
        <div className="data-box"></div>
      </div>
    </div>
  );
};
