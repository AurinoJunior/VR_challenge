import { useContext } from "react";
import { ListItem, Title } from "../../../../components";
import { UserContext } from "../../../../context/user";

export function PersonInfos() {
  const { state } = useContext(UserContext);
  const { personInfos } = state;

  return (
    <div>
      <Title title="Informações pessoais" darkVariation position="left" />
      <hr />
      {Object.entries(personInfos).map(([key, value]) => (
        <ListItem key={key} title={key} text={value} />
      ))}
    </div>
  );
}
