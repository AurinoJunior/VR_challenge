import { useContext } from "react";
import { ListItem, Title } from "../../../../components";
import { UserContext } from "../../../../context/user";

export function Bank() {
  const { state } = useContext(UserContext);
  const { bank } = state;

  return (
    <div>
      <Title title="Banco" darkVariation position="left" />
      <hr />
      {Object.entries(bank).map(([key, value]) => (
        <ListItem key={key} title={key} text={value} />
      ))}
    </div>
  );
}
