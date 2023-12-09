import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // lo importamos de manera global
import { GifExpertApp } from "./GifExpertApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
