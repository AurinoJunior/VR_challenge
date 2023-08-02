import "./Field.styles.scss";

interface IFieldProps {
  label: string;
  inputType: "text" | "password";
  name: string;
}

export function Field({ label, inputType, name }: IFieldProps) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type={inputType} id={name} name={name} />
    </div>
  );
}
