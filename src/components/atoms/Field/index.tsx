import { useContext, useState } from "react";

import "./Field.styles.scss";
import { FormContext } from "../../../context/form";

interface IFieldProps {
  label: string;
  name: string;
  isSecretField?: boolean;
}

type TInputType = "text" | "password";

export function Field({ label, isSecretField = false, name }: IFieldProps) {
  const { state, dispatch } = useContext(FormContext);
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

  function handleChangeValueField(value: string) {
    dispatch((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        type={inputType}
        id={name}
        name={name}
        value={state[name]}
        onChange={(evt) => handleChangeValueField(evt.target.value)}
        required
      />

      {isSecretField && (
        <label className="field__label-checkbox">
          <input type="checkbox" onClick={handleChangeVisibilityPassword} />
          Mostrar senha
        </label>
      )}
    </div>
  );
}
