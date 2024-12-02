import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Router/Route/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
);
