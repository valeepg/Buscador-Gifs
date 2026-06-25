import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  type: string;
  placeholder?: string;
  title: string;
  onQuery: (query: string) => void;
}
export const SearchBar = ({
  type,
  placeholder = "Buscar...",
  title,
  onQuery,
}: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    //onQuery(query);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      {type && (
        <input
          type={type}
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
      {title && <button onClick={handleSearch}>{title}</button>}
    </div>
  );
};
