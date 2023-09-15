import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";
import { KodersProvider } from "./Context/KodersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <KodersProvider>
        <App />
      </KodersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
