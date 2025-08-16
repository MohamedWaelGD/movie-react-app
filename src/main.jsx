import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div
    className={"text-dark dark:bg-dark min-h-screen bg-white dark:text-white"}
  >
    <App />
  </div>,
);
