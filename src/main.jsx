import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Container from "./Container.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-white text-black">
      <BrowserRouter>
        <Container>
          <App />
        </Container>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
