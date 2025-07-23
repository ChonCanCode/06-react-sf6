import { Link } from "react-router-dom";
import mbisonFlowchart from "../../data/mbisonFlowchart.json";

export default function Characters() {
  return (
    <>
      <h1>I am at Character Page</h1>
      <Link to="/Bison">Bison</Link>
    </>
  );
}
