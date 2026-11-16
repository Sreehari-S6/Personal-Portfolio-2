
import { useState, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import { ThemeProvider } from "./components/ThemeProvider";
import TerminalLoader from "./components/TerminalLoader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider>
      {loading && (
        <TerminalLoader onComplete={handleLoaderComplete} />
      )}

      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
