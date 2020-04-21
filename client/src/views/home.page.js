import React, { useState, useContext, useEffect } from "react";
import { fnHalfTime } from "../../lib/ApiTimer";
import { ContextApp } from "../context/Context";

// Icónos

import bra from "../../public/images/brain.svg";
import chr from "../../public/images/chrono.svg";
import cal from "../../public/images/cal.svg";

export const Home = () => {
  const { user, upContext } = useContext(ContextApp);
  const [data, setData] = useState();

  const uData = { ...user };
  console.log(user, "asàfmamfa fa");
  useEffect(() => {
    const half = uData.allTimes;
    console.log("HALF", half);
    const m = fnHalfTime(half);
    console.log("sffklfckcfkcfkmklgfmfmcemc€¶", m);
    setData(m);
  }, []);

  console.log("[HOME] El user", user);
  if (!data) {
    return <div>One minute!</div>;
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
                    <div>{data.hour}</div>
                    <div>{data.min}</div>
                    <div>{data.sec}</div>
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
                    <div>00</div>
                    <div>00</div>
                    <div>00</div>
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
                    <div>00</div>
                    <div>00</div>
                    <div>00</div>
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
