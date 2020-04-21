import React, { useState, useContext, useEffect } from "react";
import { popularCnt, intCnt } from "../connects/cntConnect";
import { ContextApp } from "../context/Context";
import Iframe from "react-iframe";
// Imágenes:
import int from "../../public/images/int.svg";
import fut from "../../public/images/fut.svg";
import ma from "../../public/images/ma.svg";
import pos from "../../public/images/pos.svg";
import neg from "../../public/images/neg.svg";
import poopi from "../../public/images/poopi.png";

export const Content = () => {
  //const { content } = useContext(ContextApp);
  //   console.log("[CONTENT] Este es el content", content);
  const [newCnt, setNewCnt] = useState();
  const [frame, setFrame] = useState();

  //console.log(content[0]?.[0].title);
  useEffect(() => {
    getContent().then((cont) => {
      const arr = cont.map((e) => {
        return e[0];
      });
      setNewCnt(arr);
    });
  }, []);

  const back = () => {
    setFrame();
  };

  const gFrame = (cnt) => {
    setFrame({
      url: cnt,
      width: "98%",
      height: "90%",
      id: "iframeId",
      className: "iFrameClass",
      display: "block",
      position: "relative",
      overflow: "hidden",
    });
  };

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

  <Iframe
    url="http://www.youtube.com/embed/xDMP3i36naA"
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"
  />;

  if (!newCnt) {
    return <div>Cargando...</div>;
  } else if (frame) {
    return (
      <div className="iFrame-box">
        <Iframe
          url={frame.url}
          width={frame.width}
          height={frame.height}
          id={frame.id}
          className={frame.className}
          display={frame.display}
          position={frame.position}
        />
        <div>
          <button onClick={() => back()}>BACK</button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container-enjoy">
          <div className="head-enjoy">
            <img src={int} className="icon-img" onClick={() => intBtn()}></img>
            <img src={fut} className="icon-img" onClick={() => intBtn()}></img>
            <img src={ma} className="icon-img" onClick={() => intBtn()}></img>
            <img src={int} className="icon-img" onClick={() => intBtn()}></img>
          </div>
          <div className="cards-container">
            <ul>
              {newCnt.map((post, i) => (
                <li key={i}>
                  <div className="card">
                    <div>
                      <div className="section-1">
                        <div className="card-img">
                          <img
                            src={
                              post.image == "self" || post.image == "nsfw"
                                ? poopi
                                : post.image
                            }
                          />
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
                            <div onClick={() => gFrame(post.url)}>+info</div>
                          </div>
                          <div className="likes-box">
                            <div className="likes">
                              <img
                                src={pos}
                                className="icon-vot"
                                onClick={() => intBtn()}
                              ></img>
                            </div>
                            <div className="likes">
                              <img
                                src={neg}
                                className="icon-vot"
                                onClick={() => intBtn()}
                              ></img>
                            </div>
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
      </>
    );
  }
};
