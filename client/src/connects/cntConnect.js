import { TOKEN_API_REDDIT, TOKEN_API_REDDIT_REFRESH } from "../../token_key";
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: "Poopapp",
  clientId: "Wo_Nm-1pqYaN1w",
  clientSecret: TOKEN_API_REDDIT(),
  refreshToken: TOKEN_API_REDDIT_REFRESH(),
});

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

export const intCnt = async () => {
  const topic = await r.getSubreddit("todayilearned");
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
  pruebas();
  return response;
};

export const pruebas = async () => {
  const topic = await r.getSubreddit("todayilearned");
  const response = await topic
    .getHot({ limit: 20 })
    .map(
      (post) =>
        post.preview?.images[0].resolutions[
          (post.preview?.images[0].resolutions).length - 2
        ]
    );
  return response;
};
