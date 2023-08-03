import { TFormData } from "../../../@types/Form";
import "./Field.styles.scss";

import { useState } from "react";

interface IFieldProps {
  label: string;
  name: string;
  valueField: string;
  getValueField: React.Dispatch<React.SetStateAction<TFormData>>;
  isSecretField?: boolean;
}

type TInputType = "text" | "password";

export function Field({
  label,
  isSecretField = false,
  name,
  valueField,
  getValueField,
}: IFieldProps) {
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
    getValueField((oldState) => ({
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
        value={valueField}
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
