import "./Login.styles.scss";
import backgroundImage from "../../assets/ilustration-background.svg";

export function Login() {
  return (
    <div className="login">
      <form className="login__form"></form>
      <img className="login__img" src={backgroundImage} />
    </div>
  );
}
