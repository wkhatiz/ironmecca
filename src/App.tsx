import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import NoPage from "./pages/NoPage.tsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Iron Mecca";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
