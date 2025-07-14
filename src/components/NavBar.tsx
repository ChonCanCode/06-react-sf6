import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/character">character</Link>
      <Link to=""></Link>
    </nav>
  );
}
