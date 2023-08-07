import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../../molecules/Form";
import { notify } from "../../atoms/Toast";

import { api } from "../../../services/api";
import { FormContext } from "../../../context/form";
import { TFormData } from "../../../@types/Form";

import backgroundImage from "../../../images/ilustration-background.svg";

import "./Login.styles.scss";

export function Login() {
  const [formData, setFormData] = useState<TFormData>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmitForm(evt: React.FormEvent<HTMLFormElement>) {
    try {
      evt.preventDefault();
      const response = await api.login(formData);
      localStorage.setItem("vr-case@user", response.token);
      navigate(`/perfil/${response.id}`);
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
