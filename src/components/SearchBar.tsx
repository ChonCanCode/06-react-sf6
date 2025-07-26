import { useState, useEffect } from "react";

type NoteEntry = {
  date: string;
  tags: string[];
  entry: string[];
};

type Props = {
  notes: NoteEntry[];
};

export default function SearchBar({ notes }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<NoteEntry[]>([]);

  useEffect(() => {
    setSearchResults(notes);
  }, [notes]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    const results = notes.filter((note) =>
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
              <li>
                {note.entry.map((value, i) => (
                  <ul key={i}>{value}</ul>
                ))}
              </li>
            </div>
          ))
        )}
      </div>
    </>
  );
}
