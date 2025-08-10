import { Link } from "react-router-dom";
import "../style/style.css";

export default function NavBar() {
  return (
    <nav className="flex space-x-2 underline">
      <Link to="/">Home</Link>
      <Link to="/combo">Combo</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/jsonformatter">JSON Formatter</Link>
    </nav>
  );
}
