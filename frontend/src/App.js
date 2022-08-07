import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddFilme from "./pages/AddFilme";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NewPage from "./pages/NewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddFilme />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
