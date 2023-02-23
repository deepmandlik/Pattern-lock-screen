import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EnterPattern from "./pages/enterPattern";

function App() {
  return (
    <BrowserRouter>
      <Home />
      {/* <Routes>
        <Route path="/" element={} />
        {/* <Route path="/enter-pattern" element={<EnterPattern />} /> */}
      {/* </Routes> */} */}
    </BrowserRouter>
  );
}

export default App;
