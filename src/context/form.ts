import { createContext } from "react";
import { TFormData } from "../@types/Form";

interface IContextProps {
  state: TFormData;
  dispatch: React.Dispatch<React.SetStateAction<TFormData>>;
}

const initialFormState = {
  username: "",
  password: "",
};

export const FormContext = createContext<IContextProps>({
  state: initialFormState,
  dispatch: () => {},
});
