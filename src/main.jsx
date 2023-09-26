import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Main from "./content.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);
