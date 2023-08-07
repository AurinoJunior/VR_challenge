import React from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Login } from "../../pages";

interface IAuthComponentProps {
  children: React.ReactNode | string;
}

interface IResponseLoginApi {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

export function AuthComponent({ children }: IAuthComponentProps) {
  const { id } = useParams();

  const token = localStorage.getItem("vr-case@user");
  if (!token) {
    return <Login />;
  }

  const decodeToken = jwt_decode<IResponseLoginApi>(token);

  if (Number(id) !== decodeToken.id) {
    return <Login />;
  }

  return <>{children}</>;
}
