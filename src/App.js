import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import News from "./pages/News";

const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Showroom" element={<News />} />
      </Routes>
    </BrowserRouter>
    );
  }

export default App;