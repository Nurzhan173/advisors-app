import React, { FC, ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
