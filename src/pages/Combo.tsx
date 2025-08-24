import { useState } from "react";
import guliecombo from "../data/guliecombo.json";

type ComboType = {
  tags: string[];
  gauge: number;
  SA: number;
  moveSet: string;
  comment: string;
  gifs: string[];
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
    <div className="mb-2 mt-2 flex-col">
      <form onSubmit={handleSearch} className="flex justify-baseline">
        <input
          className="border-1 border-black focus:bg-gray-100 rounded-md mr-2 px-2"
          type="text"
          placeholder="Search by tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          className="border-1 border-black focus:bg-gray-100 rounded-md mr-2 px-2"
          type="number"
          placeholder="Filter by Gauge"
          value={gaugeFilter}
          onChange={(e) => setGaugeFilter(e.target.value)}
          min={0}
        />
        <input
          className="border-1 border-black focus:bg-gray-100 rounded-md mr-2 px-2"
          type="number"
          placeholder="Filter by SA"
          value={saFilter}
          onChange={(e) => setSaFilter(e.target.value)}
          min={0}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
      </form>

      <div>
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults.map((combo, idx) => (
            <div key={idx} className="bg-gray-200 rounded-sm px-1 py-1 my-2">
              <h3 className="font-semibold">Tags: {combo.tags.join(", ")}</h3>
              <p className="text-green-600">Gauge: {combo.gauge}</p>
              <p className="text-red-500">Super Act: {combo.SA}</p>
              <p>
                Move Set: <span className="underline">{combo.moveSet}</span>
              </p>
              <p className="text-gray-700">Comment: {combo.comment}</p>
              {combo.gifs && combo.gifs.length > 0 && (
                <div className="flex flex-wrap justify-center">
                  {combo.gifs.map((gifUrl, gifIdx) => (
                    <img
                      key={gifIdx}
                      src={gifUrl}
                      alt={`combo gif ${gifIdx + 1}`}
                      className="rounded-md m-2 max-w-xs"
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
