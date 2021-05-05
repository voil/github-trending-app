import React from "react";
import { store } from "./store";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
