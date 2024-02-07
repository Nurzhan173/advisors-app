import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import { RootStore } from "./stores/RootStore";
import { RootStoreProvider } from "./providers/RootStoreProvider";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <RootStoreProvider rootStore={rootStore}>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </Router>
      </RootStoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
