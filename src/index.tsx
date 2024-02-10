import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import Main from "./pages/Main.tsx";
import Header from "./components/Header/Header.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <Header />
         <Main />
      </Provider>
   </React.StrictMode>
);
