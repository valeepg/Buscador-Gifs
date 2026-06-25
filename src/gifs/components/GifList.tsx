import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gifs: Gif[];
}

export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />

          {/* Agrupamos la info en una capa que flotará sobre el GIF */}
          <div className="gif-info">
            <h3>{gif.title || "Sin título"}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
