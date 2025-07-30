import { useState } from "react";
import mbisonData from "../data/mbisonFlowchart.json";

type Combo = {
  tags: string[];
  meter: number;
  damage: number;
  super: string;
  moves: string[];
};

type FileShape = { combos: Combo[] };

export default function Flowchart() {
  const { combos } = mbisonData as FileShape;
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<Combo[]>(combos);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = searchInput.toLowerCase().trim();

    if (!q) {
      setSearchResults(combos);
      return;
    }

    const filtered = combos.filter((c) =>
      c.tags.some((tag) => tag.toLowerCase().includes(q))
    );

    setSearchResults(filtered);
  }

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

      <div>
        {searchResults.length === 0 ? (
          <p>No matches.</p>
        ) : (
          searchResults.map((note, i) => (
            <div key={i}>
              <h3>Tags: {note.tags.join(", ")}</h3>
              <p>Meter: {note.meter}</p>
              <p>Damage: {note.damage}</p>
              <p>Super: {note.super}</p>
              <p>Moves: {note.moves.join(" > ")}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
