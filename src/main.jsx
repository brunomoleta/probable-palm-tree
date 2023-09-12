import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/index.scss";
import { AccordeonProvider } from "./Provider/accordeonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccordeonProvider>
      <App />
    </AccordeonProvider>
  </React.StrictMode>
);
