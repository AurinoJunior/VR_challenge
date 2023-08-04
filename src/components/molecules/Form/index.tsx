import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../atoms/Button";
import { Field } from "../../atoms/Field";
import { Title } from "../../atoms/Title";
import { notify } from "../../atoms/Toast";

import authApi from "../../../services/authApi";
import { TFormData } from "../../../@types/Form";

import "./Form.styles.scss";

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

export function Form() {
  const [formData, setFormData] = useState<TFormData>({
    password: "",
    username: "",
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
    <form className="form" onSubmit={(evt) => handleSubmitForm(evt)}>
      <Title
        title="Seja bem-vindo"
        description="Faça login e veja todas as informações"
      />

      <div className="form__fields">
        <Field
          label="Usuario"
          name="username"
          valueField={formData["username"]}
          getValueField={setFormData}
        />
        <Field
          label="Senha"
          name="password"
          valueField={formData["password"]}
          getValueField={setFormData}
          isSecretField
        />
      </div>

      <Button>Entrar</Button>
    </form>
  );
}
