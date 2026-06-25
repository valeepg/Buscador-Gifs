import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gif, setGif] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGif(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGif(gifs);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();
    //Vlidar que el query no esta vacio
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);

    setGif(gifs);

    gifsCache.current[query] = gifs;
    console.log("gifsCache", gifsCache);
  };

  return {
    // Values
    gif,
    previousTerms,
    // Methods / Actions
    handleTermClicked,
    handleSearch,
  };
};
