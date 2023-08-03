import "./Title.styles.scss";

interface ITitleProps {
  title: string;
  description?: string;
  darkVariation?: boolean;
  position?: "center" | "left" | "right";
}

export function Title({
  title,
  description,
  darkVariation,
  position = "center",
}: ITitleProps) {
  return (
    <div className={`title ${position}`}>
      <h1 className={darkVariation ? "dark" : ""}>{title}</h1>
      <p className={darkVariation ? "dark" : ""}>{description}</p>
    </div>
  );
}
