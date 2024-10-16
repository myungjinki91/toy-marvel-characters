/* eslint-disable @typescript-eslint/no-non-null-assertion */
/// <reference types="vite/client" />
import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
