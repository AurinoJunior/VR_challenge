import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Toast, AuthComponent } from "./components";
import { Login, Profile } from "./components/pages";

import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/perfil/:id",
    element: (
      <AuthComponent>
        <Profile />
      </AuthComponent>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toast />
  </React.StrictMode>
);
