import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import StockIntelligence from "./pages/StockIntelligence";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route
          path="/stock-intelligence"
          element={<StockIntelligence />}
        />
        <Route
          path="/insights"
          element={<Insights />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={
            <div className="mx-auto max-w-7xl px-6 py-32">
              <h1 className="text-5xl font-semibold tracking-tight">
                Page
              </h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;