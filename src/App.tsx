import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserContext, userInitialValue } from "./context/user";
import { IUserContextAtributes } from "./@types/User";

import { Login, Profile } from "./pages";
import { Toast } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/perfil/:id",
    element: <Profile />,
  },
]);

export function App() {
  const [userData, setUserData] =
    useState<IUserContextAtributes>(userInitialValue);

  return (
    <UserContext.Provider value={{ state: userData, dispatch: setUserData }}>
      <RouterProvider router={router} />
      <Toast />
    </UserContext.Provider>
  );
}
