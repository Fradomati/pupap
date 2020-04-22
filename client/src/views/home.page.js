import React, { useState, useContext, useEffect } from "react";
import { fnHalfTime, fnMountTime, fnSumTime } from "../../lib/ApiTimer";
import { ContextApp } from "../context/Context";

// Icónos

import bra from "../../public/images/brain.svg";
import chr from "../../public/images/chrono.svg";
import cal from "../../public/images/cal.svg";

export const Home = (props) => {
  const { user, upContext } = useContext(ContextApp);
  const [show, setShow] = useState();
  console.log("[LAS PROOPS", props);
  console.log("**************** ARRANQUE **********************");
  console.log("USERRRR:", user);
  const [data, setData] = useState({
    half: {
      hour: 0,
      min: 0,
      sec: 0,
    },
    last: {
      hour: 0,
      min: 0,
      sec: 0,
    },
    total: {
      hour: 0,
      min: 0,
      sec: 0,
    },
  });

  const fnData = () => {
    !show ? setShow("show") : setShow;
  };

  const uData = { ...user };

  useEffect(() => {
    if (user) {
      const half = uData.allTimes;
      const lastTime = uData.lastTime;
      console.log("HALF", half);
      const m = fnHalfTime(half); // Tiempo Medio
      const l = fnMountTime(lastTime); // Monto el último momento.
      const t = fnSumTime(half); // Total de tiempo
      console.log("LAST", l);
      const dataUser = { half: m, last: l, total: t };
      setData(dataUser);
    }
    // setData(dataUser);
  }, []);

  console.log("[HOME] El user", user);
  if (!user) {
    return (
      <div>
        <button
          onClick={() => {
            fnData();
          }}
        >
          Show Data
        </button>
      </div>
    );
  } else {
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
                <p>Último</p>
                <div className="reloj">
                  <div className="nums">
                    <div>{data.last.hour ? data.last.hour : 0}</div>
                    <div>{data.last.min ? data.last.min : 0}</div>
                    <div>{data.last.sec ? data.last.sec : 0}</div>
                  </div>
                  <div className="abr">
                    <div>hr</div>
                    <div>mn</div>
                    <div>sc</div>
                  </div>
                </div>
              </div>
              <div>
                <p>Total</p>
                <div className="reloj">
                  <div className="nums">
                    <div>{data.total.hour ? data.total.hour : 0}</div>
                    <div>{data.total.min ? data.total.min : 0}</div>
                    <div>{data.total.sec ? data.total.sec : 0}</div>
                  </div>
                  <div className="abr">
                    <div>hr</div>
                    <div>mn</div>
                    <div>sc</div>
                  </div>
                </div>
              </div>
              <div>
                <p>Media</p>
                <div className="reloj">
                  <div className="nums">
                    <div>{data.half.hour ? data.half.hour : 0}</div>
                    <div>{data.half.min ? data.half.min : 0}</div>
                    <div>{data.half.sec ? data.half.sec : 0}</div>
                  </div>
                  <div className="abr">
                    <div>hr</div>
                    <div>mn</div>
                    <div>sc</div>
                  </div>
                </div>
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
                <p>Día Favorito</p>
                <p>Viernes</p>
              </div>
              <div>
                <p>Hora Media</p>
                <p>Entre las</p>
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
  }
};
