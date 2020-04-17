import React, { useState, useContext, useEffect } from "react";
import { popularCnt, intCnt } from "../connects/cntConnect";
import { ContextApp } from "../context/Context";

export const Content = () => {
  //const { content } = useContext(ContextApp);
  //   console.log("[CONTENT] Este es el content", content);
  const [newCnt, setNewCnt] = useState();

  //console.log(content[0]?.[0].title);
  useEffect(() => {
    getContent().then((cont) => {
      const arr = cont.map((e) => {
        return e[0];
      });
      setNewCnt(arr);
    });
  }, []);

  const getContent = () => {
    const contenido = popularCnt();
    return contenido;
    //console.log("sss", contenido);
  };

  const intBtn = () => {
    intCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("interesting", arr);
      setNewCnt(arr);
    });
  };

  //   async () => await setNewCnt();

  //   console.log("New cont", newCnt, content);

  //              *** [LOCAL STORAGE] ***
  //   const prueba = () => {
  //     localStorage.setItem("prueba", "Esta es la prueba");
  //     console.log("Listo");
  //   };

  if (!newCnt) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="container-enjoy">
        <button type="button" onClick={() => intBtn()}>
          +Interesante
        </button>
        <div className="cards-container">
          <ul>
            {newCnt.map((post, i) => (
              <li key={i}>
                <div className="card">
                  <div className="section-1">
                    <div className="card-img">
                      <img src={post.image} />
                    </div>
                    <div className="card-text">
                      <div className="text">
                        <p>
                          <a href={post.url}>{post.title}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="section-2">
                    <div className="card-btn">
                      <div className="more-info">
                        <a href="#">+info</a>
                      </div>
                      <div className="likes-box">
                        <div className="likes">
                          <button>+</button>
                        </div>
                        <div className="likes">
                          <button>-</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};
