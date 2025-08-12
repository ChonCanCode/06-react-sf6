import { useState } from "react";
import guliecombo from "../data/guliecombo.json";

type ComboType = {
  tags: string[];
  gauge: number;
  SA: number;
  moveSet: string;
  comment: string;
};

export default function Combo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [gaugeFilter, setGaugeFilter] = useState("");
  const [saFilter, setSaFilter] = useState("");
  const [searchResults, setSearchResults] = useState<ComboType[]>(guliecombo);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tagQuery = searchQuery.toLowerCase().trim();
    const gaugeQuery = gaugeFilter.trim();
    const saQuery = saFilter.trim();

    const result = guliecombo.filter((combo) => {
      const matchesTag =
        tagQuery === "" ||
        combo.tags.some((tag) => tag.toLowerCase().includes(tagQuery));
      const matchesGauge =
        gaugeQuery === "" || String(combo.gauge) === gaugeQuery;
      const matchesSA = saQuery === "" || String(combo.SA) === saQuery;
      return matchesTag && matchesGauge && matchesSA;
    });

    setSearchResults(result);
  };

  return (
    <div className="mb-2 mt-2">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by Gauge"
          value={gaugeFilter}
          onChange={(e) => setGaugeFilter(e.target.value)}
          min={0}
        />
        <input
          type="number"
          placeholder="Filter by SA"
          value={saFilter}
          onChange={(e) => setSaFilter(e.target.value)}
          min={0}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults.map((combo, idx) => (
            <div key={idx}>
              <h3>Tags: {combo.tags.join(", ")}</h3>
              <p>Gauge: {combo.gauge}</p>
              <p>Super Act: {combo.SA}</p>
              <p>Move Set: {combo.moveSet}</p>
              <p>Comment: {combo.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
