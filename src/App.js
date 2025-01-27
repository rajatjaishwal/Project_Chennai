import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./component/home/User";
import Schedule from "./component/home/Schedule";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route  path="/" element={<Header />}/> */}
        <Route path="/" element={<User />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
