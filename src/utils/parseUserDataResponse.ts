import { IResponseUserData, IUserContextAtributes } from "../@types/User";
import { userInitialValue } from "./userInitialValue";

export function parseUserDataResponse(
  data: IResponseUserData
): IUserContextAtributes {
  const { address, bank, hair, company } = data;
  let personInfos = userInitialValue.personInfos;

  // Gathers all personal information under a single key
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value !== "object") {
      personInfos = {
        ...personInfos,
        [key]: value,
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
