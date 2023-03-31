import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "normalize.css";
import "antd/dist/reset.css";
import "@/assets/css/index.less";

import App from "@/App";
import store from "@/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* Suspense 需要包裹在 Provider 内 store.subscribe不会监听异步加载的js文件发送的事件 */}
    {/* <Suspense fallback="loading..."> */}
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
    {/* </Suspense> */}
  </Provider>
  // </React.StrictMode>
);
