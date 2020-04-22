import { TOKEN_API_REDDIT, TOKEN_API_REDDIT_REFRESH } from "../token_key";
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
    .getHot({ limit: 20 })
    .map((post) => [
      { title: post.title, image: post.thumbnail, url: post.url },
    ]);

  return response;
};
