import React from "react";

import "./Button.styles.scss";

interface IButtonProps {
  children: React.ReactNode | string;
  buttonType?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  buttonType = "submit",
  onClick,
}: IButtonProps) {
  return (
    <button className="button" type={buttonType} onClick={onClick}>
      {children}
    </button>
  );
}
