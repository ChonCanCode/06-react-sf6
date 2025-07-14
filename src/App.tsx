import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Characters from "./pages/characters/Characters";
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
          <Route path="/character" element={<Characters />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
