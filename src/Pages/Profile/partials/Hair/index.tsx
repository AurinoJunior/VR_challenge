import { useContext } from "react";
import { ListItem, Title } from "../../../../components";
import { UserContext } from "../../../../context/user";

export function Hair() {
  const { state } = useContext(UserContext);
  const { hair } = state;

  return (
    <div>
      <Title title="Cabelo" darkVariation position="left" />
      <hr />
      {Object.entries(hair).map(([key, value]) => (
        <ListItem key={key} title={key} text={value} />
      ))}
    </div>
  );
}
