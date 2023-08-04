import { ReactNode } from "react";
import { ListItem } from "../../atoms/ListItem";
import { Title } from "../../atoms/Title";

import "./List.styles.scss";

type TSimpleItem = string | number | null;

type TMultiItem = {
  [key: string]: TSimpleItem | TMultiItem;
};

interface IListProps {
  title: string;
  data: TSimpleItem | TMultiItem;
}

export function List({ data, title }: IListProps) {
  function recursiveListItem(dataObj: TMultiItem): Iterable<ReactNode> {
    return Object.entries(dataObj).map(([key, value]) => {
      if (!value) return;
      if (typeof value !== "object") {
        return <ListItem key={key} title={key} text={value} />;
      }
      return recursiveListItem(value as TMultiItem);
    });
  }

  return (
    <div className="list">
      <Title title={title} darkVariation position="left" />
      <hr />

      {recursiveListItem(data as TMultiItem)}
    </div>
  );
}
