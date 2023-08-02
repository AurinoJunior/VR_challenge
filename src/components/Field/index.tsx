import "./Field.styles.scss";

import { useState } from "react";

interface IFieldProps {
  label: string;
  isSecretField?: boolean;
  name: string;
}

type TInputType = "text" | "password";

export function Field({ label, isSecretField = false, name }: IFieldProps) {
  const [inputType, setInputType] = useState<TInputType>(
    isSecretField ? "password" : "text"
  );

  function handleChangeVisibilityPassword() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type={inputType} id={name} name={name} />

      {isSecretField && (
        <label className="field__label-checkbox">
          <input type="checkbox" onClick={handleChangeVisibilityPassword} />
          Mostrar senha
        </label>
      )}
    </div>
  );
}
