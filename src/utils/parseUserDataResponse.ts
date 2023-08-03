import { IResponseUserData, IUserContextAtributes } from "../@types/User";
import { userInitialValue } from "../context/user";

export function parseUserDataResponse(
  data: IResponseUserData
): IUserContextAtributes {
  const { address, bank, hair, company } = data;
  let personInfos = userInitialValue.personInfos;

  Object.entries(data).forEach(([chave, valor]) => {
    if (typeof valor !== "object") {
      personInfos = {
        ...personInfos,
        [chave]: valor,
      };
    }
    console.log(personInfos);
  });

  return {
    personInfos,
    address,
    bank,
    hair,
    company,
  };
}
