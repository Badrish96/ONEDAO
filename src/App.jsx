import React from "react";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
