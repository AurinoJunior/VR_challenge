import { useNavigate } from "react-router-dom";

import authApi from "../../../services/authApi";

import { Form } from "../../molecules/Form";
import { notify } from "../../atoms/Toast";

import backgroundImage from "../../../images/ilustration-background.svg";

import "./Login.styles.scss";
import { useState } from "react";
import { TFormData } from "../../../@types/Form";
import { FormContext } from "../../../context/form";

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

export function Login() {
  const [formData, setFormData] = useState<TFormData>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmitForm(evt: React.FormEvent<HTMLFormElement>) {
    try {
      evt.preventDefault();
      const { data } = await authApi.post<IResponseLoginApi>(
        "/login",
        formData
      );
      navigate(`/perfil/${data.id}`);
    } catch (error) {
      if (error instanceof Error) {
        notify("Ops, parece que os dados inseridos estão incorretos");
      }
    }
  }

  return (
    <FormContext.Provider value={{ state: formData, dispatch: setFormData }}>
      <div className="login">
        <Form onSubmit={handleSubmitForm} />
        <img
          className="login__img"
          src={backgroundImage}
          alt="Ilustração de um homem com uma camiseta verde com o logo da VR e varios objetos na cor verde."
          width={1100}
        />
      </div>
    </FormContext.Provider>
  );
}
