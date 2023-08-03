import "./Title.styles.scss";

interface ITitleProps {
  title: string;
  description?: string;
  darkVariation?: boolean;
}

export function Title({ title, description, darkVariation }: ITitleProps) {
  return (
    <div className="title">
      <h1 className={darkVariation ? "dark" : ""}>{title}</h1>
      <p className={darkVariation ? "dark" : ""}>{description}</p>
    </div>
  );
}
