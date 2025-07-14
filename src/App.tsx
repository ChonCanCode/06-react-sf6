import Home from "./pages/Home";
import Characters from "./pages/characters/Characters";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
