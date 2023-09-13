import "./App.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Songs from "./Pages/Songs";
import Song from "./Pages/Songs/Song";

function App() {
  return (
    <>
      <nav className="d-flex justify-content-between p-3 border-default">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="songs" className="nav-link">
              Songs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="users" className="nav-link">
              Users
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<h1>Users</h1>} />
            <Route path="songs" element={<Songs />} />
            <Route path="songs/:songId" element={<Song />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
