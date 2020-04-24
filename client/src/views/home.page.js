import React, { useState, useContext, useEffect } from "react";
import {
  fnHalfTime,
  fnMountTime,
  fnSumTime,
  fnDayWeek,
  fnHourDay,
  fnIntData,
} from "../../lib/ApiTimer";
import { useUser } from "../connects/authConnect";
import { ContextApp } from "../context/Context";
import { withProtected } from "../../lib/protectRoute";

// Icónos

import bra from "../../public/images/brain.svg";
import chr from "../../public/images/chrono.svg";
import cal from "../../public/images/cal.svg";

const Page = () => {
  const [show, setShow] = useState();

  const usuario = useUser();
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

  useEffect(() => {
    if (usuario) {
      const half = usuario.allTimes || [];
      const lastTime = usuario.lastTime || [];
      const hours = usuario.hours || [];
      const daysWeek = usuario.dayWeek || [];
      console.log("HALF", half);
      const m = fnHalfTime(half); // Tiempo Medio
      const l = fnMountTime(lastTime); // Monto el último momento.
      const t = fnSumTime(half); // Total de tiempo
      const d = fnDayWeek(daysWeek); // Día de la semana
      const h = fnHourDay(hours);
      const i = fnIntData(t);
      console.log("DÏA:", d);
      console.log("LAST", l);
      console.log("INFO", i);
      const dataUser = { half: m, last: l, total: t, day: d, hour: h, info: i };
      setData(dataUser);
    }
    // setData(dataUser);
  }, []);

  return (
    <div>
      <div></div>
      <div className="data-container">
        <div className="data-box">
          <div className="title-data chr">
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
          </div>
        </div>
        <div className="data-box">
          <div className="title-data cal">
            <img src={cal} className="data-icon cal" />
            <p>Tu calendario</p>
          </div>
          <div className="data-text">
            <div className="reloj">
              <p>Día Favorito</p>
              <p className="data-result">
                {data.day ? data.day : "Sin estrenar"}
              </p>
            </div>
            <div>
              <p>Hora Media</p>
              <p className="data-result">
                {data.hour ? data.hour : "Sin estrenar"} h
              </p>
            </div>
          </div>
        </div>
        <div className="data-box">
          <div className="title-data bra">
            <img src={bra} className="data-icon bra" />
            <p>De interés</p>
          </div>
          <div className="data-text">
            <div>
              <p>Sabías que....</p>
              <p>{data.info ? data.info : "Sin estrenar ¿A qué esperas?"} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = withProtected(Page);
