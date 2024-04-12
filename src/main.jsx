import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import { router } from "./Components/Route"
import App from "./App.jsx";
import "./index.css";
import Layout from "./Components/Layout.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
      </Layout>
  </React.StrictMode>
);
