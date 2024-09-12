/** @format */

import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
