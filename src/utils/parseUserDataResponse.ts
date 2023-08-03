import { userInitialValue } from "../context/user";
import { IResponseUserData, IUserContextAtributes } from "../@types/User";

export function parseUserDataResponse(
  data: IResponseUserData
): IUserContextAtributes {
  const { address, bank, hair, company } = data;
  let personInfos = userInitialValue.personInfos;

  // Gathers all personal information under a single key
  Object.entries(data).forEach(([chave, valor]) => {
    if (typeof valor !== "object") {
      personInfos = {
        ...personInfos,
        [chave]: valor,
      };
    }
  });

  return {
    personInfos,
    address,
    bank,
    hair,
    company,
  };
}
