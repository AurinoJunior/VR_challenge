import "./Title.styles.scss";

interface ITitleProps {
  title: string;
  description: string;
}

export function Title({ title, description }: ITitleProps) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
