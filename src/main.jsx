import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Movies from "./context/useMovies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Movies>
      <App />
    </Movies>
  </React.StrictMode>
);
