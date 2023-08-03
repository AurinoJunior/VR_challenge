import { createContext } from "react";
import { IUserContextAtributes } from "../@types/User";

export const userInitialValue = {
  id: null,
  firstName: "",
  lastName: "",
  maidenName: "",
  age: null,
  gender: "",
  email: "",
  phone: "",
  birthDate: "",
  image: "",
  bloodGroup: "",
  height: null,
  weight: null,
  eyeColor: "",
  hair: {
    color: "",
    type: "",
  },
  domain: "",
  address: {
    address: "",
    city: "",
    postalCode: "",
    state: "",
  },
  university: "",
  bank: {
    cardExpire: "",
    cardNumber: null,
    cardType: "",
    currency: "",
    iban: "",
  },
  company: {
    address: {
      address: "",
      city: "",
      postalCode: null,
      state: "",
    },
    department: "",
    name: "",
    title: "",
  },
  ein: "",
};

interface IContextProps {
  state: IUserContextAtributes;
  dispatch: React.Dispatch<React.SetStateAction<IUserContextAtributes>>;
}
export const UserContext = createContext<IContextProps>({
  state: userInitialValue,
  dispatch: () => {},
});
