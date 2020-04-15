import React, { useState, useContext, useEffect } from "react";
import { popularCnt } from "../../lib/ApiContent";
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
      <div>
        <button type="button" onClick={() => console.log("hola")}>
          Pulse me
        </button>
        <ul>
          {newCnt.map((post, i) => (
            <li key={i}>
              <h2>
                <a href={post.url}>{post.title}</a>
              </h2>
              <img src={post.image} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
