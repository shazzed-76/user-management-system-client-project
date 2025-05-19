import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Router/router.jsx";
import UsersProveder from "./Contexts/UsersProveder.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersProveder>
      <RouterProvider router={router} />
    </UsersProveder>
  </StrictMode>
);
