import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonItemDetail from "./components/PokemonItemDetail";
import Home from "./pages/Home";
import FilterPage from "./pages/FilterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/filter" element={<FilterPage />}></Route>
          <Route path="/pokemon/:id" element={<PokemonItemDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
