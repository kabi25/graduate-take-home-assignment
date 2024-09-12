/** @format */

import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/user-profile" element={<UserProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
