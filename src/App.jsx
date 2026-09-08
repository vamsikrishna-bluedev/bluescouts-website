import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="*"
          element={
            <div className="mx-auto max-w-7xl px-6 py-32">
              <h1 className="text-4xl font-semibold tracking-tight">
                Page coming soon
              </h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;