import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Store, Team } from "./pages";

function App() {
  return (
    <div className="App relative">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
