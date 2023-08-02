import { Title, Field, Button } from "../../components";

import "./Login.styles.scss";

import backgroundImage from "../../assets/ilustration-background.svg";

export function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <Title
          title="Seja bem-vindo"
          description="Faça login e veja todas as informações"
        />

        <div className="login__form__fields">
          <Field label="Usuario" name="user" />
          <Field label="Senha" name="pass" isSecretField />
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
