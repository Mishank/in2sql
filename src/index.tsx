import React from "react";
import ReactDOM from "react-dom/client";



import Layout from "./components/layout";

const App = () => {
  return (
 <Layout/>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
