import { TOKEN_API_REDDIT, TOKEN_API_REDDIT_REFRESH } from "../../token_key";
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: "Poopapp",
  clientId: "Wo_Nm-1pqYaN1w",
  clientSecret: TOKEN_API_REDDIT(),
  refreshToken: TOKEN_API_REDDIT_REFRESH(),
});

// Contenido Español

export const popularCnt = async () => {
  const topic = await r.getSubreddit("es");
  const response = await topic
    .getHot({ limit: 21 })
    .map((post) => [
      { title: post.title, image: post.thumbnail, url: post.url },
    ]);
  response.shift(); // Elimino el primer elemento que no me sirve
  return response;
};

// Contenido Interesante

export const intCnt = async () => {
  const topic = await r.getSubreddit("todayilearned");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image: post.thumbnail,
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
    [post],
  ]);
  pruebas();
  return response;
};

// Mapas

export const mapCnt = async () => {
  const topic = await r.getSubreddit("MapPorn");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image: post.thumbnail,
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
  ]);
  response.shift();
  response.shift(); // Elimino los dos primeros post.
  return response;
};

// Sports

export const soccerCnt = async () => {
  const topic = await r.getSubreddit("soccer");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image:
        "https://b.thumbs.redditmedia.com/NojkQWzGBAau2dP3q0NTY5uJisbRx_q3ithIT5iLypE.png",
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
  ]);
  response.shift();
  response.shift();
  return response;
};

// Dogs

export const dogsCnt = async () => {
  const topic = await r.getSubreddit("woof_irl");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image: post.thumbnail,
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
    [post],
  ]);
  response.shift();
  return response;
};

// Interesting as Fuck

export const intAsFuckCnt = async () => {
  const topic = await r.getSubreddit("interestingasfuck");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image: post.thumbnail,
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
  ]);
  response.shift();
  return response;
};

// Tools

export const toolsCnt = async () => {
  const topic = await r.getSubreddit("specializedtools");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image: post.thumbnail,
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
  ]);
  response.shift();
  return response;
};

// Asshole design

export const badDesignCnt = async () => {
  const topic = await r.getSubreddit("assholedesign");
  const response = await topic.getHot({ limit: 20 }).map((post) => [
    {
      title: post.title,
      image: post.thumbnail,
      img_hq:
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ], //la penúltima imagen con máxima calidad
      url: post.url,
    },
  ]);
  response.shift();
  return response;
};

export const pruebas = async () => {
  const topic = await r.getSubreddit("MapPorn");
  const response = await topic.getHot({ limit: 20 }).map((post) => [post]);

  console.log[("[MAP PORN ::::>]", response)];
  return response;
};
