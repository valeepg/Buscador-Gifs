import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyAPi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyAPi<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 15,
      // lang: "es",
      // api_key: import.meta.env.VITE_GIPHY_API_KEY,
    },
  });

  //   fetch(
  //     `https://api.giphy.com/v1/gifs/search?api_key=tRoGV4YSmJ0nb6SMGsqjADdEvaZraBwL&q=${query}&limit=10&lang=es`,
  //   );
  // console.log(response.data);

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.fixed_height.url,
    width: Number(gif.images.fixed_height.width),
    height: Number(gif.images.fixed_height.height),
  }));
};
