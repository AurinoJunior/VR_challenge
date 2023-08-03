import { useState } from "react";
import { UserContext, userInitialValue } from "./context/user";

import { IUserContextAtributes } from "./@types/User";

import { Login } from "./pages";

export function App() {
  const [userData, setUserData] =
    useState<IUserContextAtributes>(userInitialValue);

  return (
    <UserContext.Provider value={{ state: userData, dispatch: setUserData }}>
      <Login />
    </UserContext.Provider>
  );
}
