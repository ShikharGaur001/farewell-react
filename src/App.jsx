import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Password from "./pages/Password";
import Host from "./pages/Host";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/enter" element={<Password />} />
        <Route path="/hosted" element={<Host />} />
      </Routes>
    </div>
  );
};

export default App;
