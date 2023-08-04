import { ListItem } from "../../atoms/ListItem";
import { Title } from "../../atoms/Title";

import "./List.styles.scss";

interface IListProps {
  title: string;
  data: {
    [key: string]: string | number | null;
  };
}

export function List({ data, title }: IListProps) {
  return (
    <div className="list">
      <Title title={title} darkVariation position="left" />
      <hr />
      {Object.entries(data).map(([key, value]) => (
        <ListItem key={key} title={key} text={value} />
      ))}
    </div>
  );
}
