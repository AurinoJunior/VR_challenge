export interface IResponseUserData {
  id: number | null;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number | null;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number | null;
  weight: number | null;
  eyeColor: string;
  domain: string;
  university: string;
  ein: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    address: string;
    city: string;
    coordinates: { lat: number; lng: number };
    postalCode: string;
    state: string;
  };
  bank: {
    cardExpire: string;
    cardNumber: number | null;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      postalCode: number | null;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
}

export interface IUserContextAtributes {
  personInfos: {
    id: number | null;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number | null;
    gender: string;
    email: string;
    phone: string;
    username: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number | null;
    weight: number | null;
    eyeColor: string;
    domain: string;
    university: string;
    ein: string;
  };
  hair: {
    color: string;
    type: string;
  };
  bank: {
    cardExpire: string;
    cardNumber: number | null;
    cardType: string;
    currency: string;
    iban: string;
  };
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number | null;
      lng: number | null;
    };
    postalCode: string;
    state: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      postalCode: number | null;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
}
