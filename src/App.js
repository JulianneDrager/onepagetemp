import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BeforeAndAfter from "./Components/BeforeAndAfter";
// import About from "./Components/About";
import Screen from "./Components/Screen";
// import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Screen/>} />
          {/* <Route exact path="/about" element={<About/>} />
          <Route exact path="/before" element={<BeforeAndAfter/>} />
          <Route exact path="/contact" element={<Contact/>} /> */}
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
