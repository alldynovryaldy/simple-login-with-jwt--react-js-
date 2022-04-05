import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// set up react js v.18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
