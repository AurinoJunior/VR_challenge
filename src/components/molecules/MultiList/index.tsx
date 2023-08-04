import { ReactNode } from "react";
import { ListItem } from "../../atoms/ListItem";
import { Title } from "../../atoms/Title";

type TItem = {
  [key: string]: string | number | TItem | null;
};

interface IMultiListProps {
  title: string;
  data: TItem;
}

export function MultiList({ data, title }: IMultiListProps) {
  function recursiveListItem(dataObj: TItem): Iterable<ReactNode> {
    return Object.entries(dataObj).map(([key, value]) => {
      if (!value) return;
      if (typeof value !== "object") {
        return <ListItem key={key} title={key} text={value} />;
      }
      return recursiveListItem(value as TItem);
    });
  }

  return (
    <div className="list">
      <Title title={title} darkVariation position="left" />
      <hr />

      {recursiveListItem(data)}
    </div>
  );
}
