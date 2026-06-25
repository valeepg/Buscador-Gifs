import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

import { useGifs } from "./gifs/hooks/useGifs";
import { CustomFooter } from "./shared/components/CustomFooter";

export const GifsApp = () => {
  const { gif, previousTerms, handleTermClicked, handleSearch } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search*/}
      <SearchBar
        type="text"
        placeholder="Buscar gifts..."
        title="Buscar"
        onQuery={handleSearch}
      />

      {/*Busquedas previas */}
      <PreviousSearches
        title="Búsquedas previas"
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gif} />

      {/* Footer */}
      <CustomFooter />
    </>
  );
};
