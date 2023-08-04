import { Button } from "../../atoms/Button";
import { Field } from "../../atoms/Field";
import { Title } from "../../atoms/Title";

import "./Form.styles.scss";

interface IFormProps {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ onSubmit }: IFormProps) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <Title
        title="Seja bem-vindo"
        description="Faça login e veja todas as informações"
      />

      <div className="form__fields">
        <Field label="Usuario" name="username" />
        <Field label="Senha" name="password" isSecretField />
      </div>

      <Button>Entrar</Button>
    </form>
  );
}
