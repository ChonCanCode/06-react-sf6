import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Flowchart from "./pages/Flowchart";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./style/style.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowchart" element={<Flowchart />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
