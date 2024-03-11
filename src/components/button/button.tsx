import { forwardRef } from "react";

import { clsx } from "clsx";

import st from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button className={clsx(st.button, className)} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "ButtonBase";

export default Button;
