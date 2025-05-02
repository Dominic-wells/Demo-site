import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PosterLayout from "./components/PosterLayout";
import ChromieDemo from "./components/ChromieDemo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ChromieDemo /> {/* This is the interactive demo component */}
      <Routes>
        <Route path="/" element={<PosterLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
