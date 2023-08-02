import React from "react";

import "./Button.styles.scss";

interface IButtonProps {
  children: React.ReactNode | string;
  buttonType?: "button" | "submit";
}

export function Button({ children, buttonType = "submit" }: IButtonProps) {
  return (
    <button className="button" type={buttonType}>
      {children}
    </button>
  );
}
