import React, { useState, useContext, useEffect } from "react";
import {
  popularCnt,
  intCnt,
  mapCnt,
  soccerCnt,
  badDesignCnt,
  dogsCnt,
  toolsCnt,
  intAsFuckCnt,
} from "../connects/cntConnect";
import { ContextApp } from "../context/Context";
import Iframe from "react-iframe";
import { Loading } from "../../lib/loading/preLoad";
// Imágenes:
import int from "../../public/images/int.svg";
import fut from "../../public/images/fut.svg";
import ma from "../../public/images/ma.svg";
import pos from "../../public/images/pos.svg";
import neg from "../../public/images/neg.svg";
import poopi from "../../public/images/poopi.png";
import rgt from "../../public/images/rgt.svg";
import lft from "../../public/images/lft.svg";
import dog from "../../public/images/dog.svg";
import rocket from "../../public/images/rocket.svg";
import bla from "../../public/images/bla.svg";
import mach from "../../public/images/machine.svg";

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

  // [CONTENIDO INTERESANTE]

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

  // [CONTENIDO MAPAS]

  const mapBtn = () => {
    mapCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("Mapas", arr);
      setNewCnt(arr);
    });
  };

  // [CONTENIDO SOCCER]

  const soccBtn = () => {
    soccerCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("Mapas", arr);
      setNewCnt(arr);
    });
  };

  // [CONTENIDO DOG]

  const dogsBtn = () => {
    dogsCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("Mapas", arr);
      setNewCnt(arr);
    });
  };

  // [CONTENIDO INTERESTING AS FUCK]

  const intFuckCntBtn = () => {
    intAsFuckCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("Mapas", arr);
      setNewCnt(arr);
    });
  };

  // [CONTENIDO TOOLS]

  const toolsBtn = () => {
    toolsCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("Mapas", arr);
      setNewCnt(arr);
    });
  };

  // [CONTENIDO ASSHOLE DESIGN]

  const badDesignBtn = () => {
    badDesignCnt().then((cont) => {
      const arr = cont.map((e) => {
        console.log(e);
        return e[0];
      });
      console.log("Mapas", arr);
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
    return <Loading />;
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
          <div className="box-directions">
            <div className="box-directions-sub">
              <div className="head-enjoy">
                <img
                  src={rocket}
                  className="icon-img"
                  onClick={() => intFuckCntBtn()}
                ></img>
                <img
                  src={int}
                  className="icon-img"
                  onClick={() => intBtn()}
                ></img>
                <img
                  src={dog}
                  className="icon-img"
                  onClick={() => dogsBtn()}
                ></img>
                <img
                  src={mach}
                  className="icon-img"
                  onClick={() => toolsBtn()}
                ></img>
                <img
                  src={bla}
                  className="icon-img"
                  onClick={() => badDesignBtn()}
                ></img>
                <img
                  src={fut}
                  className="icon-img"
                  onClick={() => soccBtn()}
                ></img>
                <img
                  src={ma}
                  className="icon-img"
                  onClick={() => mapBtn()}
                ></img>
              </div>
              <div className="directions">
                <div className="directions-flex">
                  <img src={lft}></img>
                  <img src={rgt}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-container">
            <ul>
              {newCnt.map((post, i) => (
                <li key={i}>
                  <div className="card-contnt">
                    <div>
                      <div className="section-1">
                        <div className="card-contnt-img">
                          <img
                            src={
                              post.image == "self" ||
                              post.image == "nsfw" ||
                              post.image == "default"
                                ? poopi
                                : post.image
                            }
                          />
                        </div>
                        <div className="card-contnt-txt">
                          <div className="txt">
                            <p>{post.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="section-2">
                        <div className="card-contnt-btn">
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
