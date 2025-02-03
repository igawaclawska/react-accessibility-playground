import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const React = require("react");
// const ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
import axe from "@axe-core/react";

// const axe = require("@axe-core/react");
// axe(React, ReactDOM, 1000);

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

// if (process.env.NODE_ENV !== "production") {

// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
