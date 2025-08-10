import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Combo from "./pages/Combo";
import NavBar from "./components/NavBar";
import JsonFormatter from "./pages/JsonFormatter";
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
          <Route path="/combo" element={<Combo />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/jsonformatter" element={<JsonFormatter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
