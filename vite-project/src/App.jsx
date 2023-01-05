import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import LandingPage from "./routes/LandingPage";
import AboutPage from "./routes/AboutPage/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
