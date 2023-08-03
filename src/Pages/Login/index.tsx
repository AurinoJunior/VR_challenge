import { useState } from "react";
import { useNavigate } from "react-router-dom";

import authApi from "../../services/authApi";
import { Title, Field, Button } from "../../components";

import "./Login.styles.scss";
import backgroundImage from "../../assets/ilustration-background.svg";

import { TFormData } from "../../@types/Form";

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
    password: "",
    username: "",
  });
  const navigate = useNavigate();

  async function handleSubmitForm(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const { data } = await authApi.post<IResponseLoginApi>("/login", formData);
    navigate(`/perfil/${data.id}`);
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={(evt) => handleSubmitForm(evt)}>
        <Title
          title="Seja bem-vindo"
          description="Faça login e veja todas as informações"
        />

        <div className="login__form__fields">
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

      <img
        className="login__img"
        src={backgroundImage}
        alt="Ilustração de um homem com uma camiseta verde com o logo da VR e varios objetos na cor verde."
        width={1100}
      />
    </div>
  );
}
