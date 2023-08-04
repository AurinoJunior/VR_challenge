import { createContext } from "react";
import { TFormData } from "../@types/Form";

export const formInitialValue: TFormData = {
  username: "",
  password: "",
};

interface IContextProps {
  state: TFormData;
  dispatch: React.Dispatch<React.SetStateAction<TFormData>>;
}
export const FormContext = createContext<IContextProps>({
  state: formInitialValue,
  dispatch: () => {},
});
