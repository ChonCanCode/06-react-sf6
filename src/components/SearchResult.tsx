import { useState } from "react";
import Notes from "../pages/Notes";

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
      <div>
        {searchResult.map((player) => (
          <Notes key={player.id} value={player.notes} />
        ))}
      </div>
    </>
  );
}
