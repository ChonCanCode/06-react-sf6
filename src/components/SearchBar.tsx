import { useState } from "react";

type NoteEntry = {
  date: string;
  players: string[];
  entries: string[];
};

type Props = {
  notes: NoteEntry[];
};

export default function SearchBar({ notes }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NoteEntry[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchQuery.toLowerCase().trim();

    const results = notes.filter((note) =>
      note.players.some((player) => player.toLowerCase().includes(query))
    );

    setSearchResults(results);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by player name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {searchResults.length === 0 && searchQuery !== "" ? (
          <p>No notes found for that player.</p>
        ) : (
          searchResults.map((note, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <h3>{note.date}</h3>
              <p>
                <strong>Players:</strong> {note.players.join(", ")}
              </p>
              <ul>
                {note.entries.map((entry, i) => (
                  <li key={i}>{entry}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
}
