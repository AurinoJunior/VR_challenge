import { createContext } from "react";
import { IUserContextAtributes } from "../@types/User";

export const userInitialValue: IUserContextAtributes = {
  personInfos: {
    id: null,
    firstName: "",
    lastName: "",
    maidenName: "",
    age: null,
    gender: "",
    email: "",
    phone: "",
    username: "",
    birthDate: "",
    image: "",
    bloodGroup: "",
    height: null,
    weight: null,
    eyeColor: "",
    university: "",
    domain: "",
    ein: "",
  },
  hair: {
    color: "",
    type: "",
  },
  address: {
    address: "",
    city: "",
    coordinates: {
      lat: null,
      lng: null,
    },
    postalCode: "",
    state: "",
  },
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
      coordinates: {
        lat: null,
        lng: null,
      },
      postalCode: null,
      state: "",
    },
    department: "",
    name: "",
    title: "",
  },
};

interface IContextProps {
  state: IUserContextAtributes;
  dispatch: React.Dispatch<React.SetStateAction<IUserContextAtributes>>;
}
export const UserContext = createContext<IContextProps>({
  state: userInitialValue,
  dispatch: () => {},
});
