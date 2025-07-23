import SearchBar from "../components/SearchBar";
import dailynotes from "../data/dailynotes.json";

export default function Notes() {
  return (
    <div>
      <SearchBar notes={dailynotes} />
    </div>
  );
}
