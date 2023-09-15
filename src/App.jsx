import "./App.scss";
import { useState, useEffect } from "react";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Generation from "./Pages/Generation";
import { useKoders } from "./Context/KodersContext";

function App() {
  const [generations, setGenerations] = useState(null);
  const koders = useKoders();
  console.log(koders);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Routes>
            <Route path="/" element={<Home generations={generations} />} />
            <Route path="/generation/:id" element={<Generation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
