import React from "react";
import { Login } from "../../pages";

interface IAuthComponentProps {
  children: React.ReactNode | string;
}

export function AuthComponent({ children }: IAuthComponentProps) {
  const token = localStorage.getItem("vr-case@user");

  if (!token) {
    return <Login />;
  }

  return <>{children}</>;
}
