import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import Main from "./pages/Main.tsx";
import Header from "./components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Header />
      <Main />
   </React.StrictMode>
);
