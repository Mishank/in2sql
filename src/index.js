import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import TopBar from "./components/layout/topbar/topBar";
import Footer from "./components/layout/footer/footer";

const App = () => {
  return (
    <div>
   
      <Router>
        <TopBar />
        <Routes />
        <Footer/>
      </Router>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
