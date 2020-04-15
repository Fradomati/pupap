import React, { useState } from "react";
import { prueba } from "../../lib/ApiContent";

export const Content = () => {
  //   let post;
  //   const preContent = async () => {
  //     const bla = await prueba();
  //     post = bla;
  //   };
  //   preContent();
  //   const [content, setContent] = useState(post);
  //   console.log(content);
  const prueba = () => {
    localStorage.setItem("prueba", "Esta es la prueba");
    console.log("Listo");
  };
  return (
    <div>
      <button type="button" onClick={() => prueba()}>
        Pulse me
      </button>
    </div>
  );
};
