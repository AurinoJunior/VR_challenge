export interface IUserContextAtributes {
  id: number | null;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number | null;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number | null;
  weight: number | null;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
  university: string;
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
  ein: string;
}
