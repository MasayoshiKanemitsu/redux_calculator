import React from "react";
import { createRoot } from "react-dom/client";
// import { createStore } from "redux";//非推奨だった
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//コンポーネント
import App from "./App";
import reducer from "./redux/reducers";

// const Store = createStore(reducer);
const Store = configureStore({ reducer: reducer });

//Appをid="root"にレンダリングする。
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
