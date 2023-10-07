import Navbar from "./components/Navbar";
import SectionFavourites from "./components/SectionFavourites";
import SectionJoin from "./components/SectionJoin";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Abonament from "./pages/Abonament";
import Help from "./pages/Help";

function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/abonament" element={<Abonament />} />
        <Route path="/pomoc" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
