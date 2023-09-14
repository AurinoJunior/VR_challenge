import React from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { IResponseLoginApi } from "../../../@types/Login";
import { Login } from "../../pages";

interface IAuthComponentProps {
  children: React.ReactNode | string;
}

export function AuthComponent({ children }: IAuthComponentProps) {
  const { id } = useParams();

  const token = localStorage.getItem("login-screen@user");
  if (!token) {
    return <Login />;
  }

  const decodeToken = jwt_decode<IResponseLoginApi>(token);

  if (Number(id) !== decodeToken.id) {
    return <Login />;
  }

  return <>{children}</>;
}
