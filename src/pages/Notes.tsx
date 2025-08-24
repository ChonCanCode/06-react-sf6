import dailynotes from "../data/dailynotes.json";
import { useState, useEffect } from "react";

type NoteEntry = {
  date: string;
  tags: string[];
  entry: string[];
  gifs?: string[];
};

export default function Notes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NoteEntry[]>([]);

  useEffect(() => {
    setSearchResults(dailynotes);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      setSearchResults(dailynotes);
      return;
    }

    const results = dailynotes.filter((note) =>
      note.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setSearchResults(results);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by tag.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchResults.length === 0 && searchQuery !== "" ? (
          <p>No notes found for that tag.</p>
        ) : (
          searchResults.map((note, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <h3>{note.date}</h3>
              <p>
                <strong>Tags:</strong> {note.tags.join(", ")}
              </p>
              <ul>
                {note.entry.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>

              {note.gifs && note.gifs.length > 0 && (
                <div style={{ marginTop: "0.5rem" }}>
                  {note.gifs.map((gifUrl, gifIndex) => (
                    <img
                      key={gifIndex}
                      src={gifUrl}
                      alt={`Note GIF ${gifIndex + 1}`}
                      style={{ maxWidth: "100%", marginBottom: "0.5rem" }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
