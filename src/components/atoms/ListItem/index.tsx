import "./ListItem.styles.scss";

interface IListItemProps {
  title: string;
  text: string | number | null;
}

export function ListItem({ title, text }: IListItemProps) {
  return (
    <div className="list-item">
      <p className="list-item__title">{title}</p>
      <p className="list-item__text">{text}</p>
    </div>
  );
}
