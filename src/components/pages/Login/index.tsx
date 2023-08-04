import "./Login.styles.scss";

import backgroundImage from "../../../images/ilustration-background.svg";
import { Form } from "../..";

export function Login() {
  return (
    <div className="login">
      <Form />
      <img
        className="login__img"
        src={backgroundImage}
        alt="Ilustração de um homem com uma camiseta verde com o logo da VR e varios objetos na cor verde."
        width={1100}
      />
    </div>
  );
}
