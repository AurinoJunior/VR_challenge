import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export const notify = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 8000,
  });
};

export function Toast() {
  return <ToastContainer theme="colored" />;
}
