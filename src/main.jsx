import { UserNameProvider } from "./context/UserNameContext";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserNameProvider>
      <RouterProvider router={router} />
    </UserNameProvider>
  </React.StrictMode>
);
