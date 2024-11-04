import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={3000} />
  </StrictMode>
);
