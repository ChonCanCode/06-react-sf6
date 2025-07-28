import { useEffect, useState } from "react";

type comboType = {
  tags: string;
  meter: number;
  damage: number;
  moves: string[];
};

type dataType = {
  data: comboType[];
};

export default function Flowchart() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState();

  function handleSearch() {}

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by tags..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
