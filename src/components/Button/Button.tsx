import { cloneElement, forwardRef } from "react";
// components
import { Loader } from "@components/Loader";
// helper
import {
  TBtnSizes,
  TBtnVariant,
  getButtonStyling,
  getIconStyling,
} from "./helper";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBtnVariant;
  size?: TBtnSizes;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  appendIcon?: any;
  prependIcon?: any;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      className = "",
      type = "button",
      loading = false,
      disabled = false,
      prependIcon = null,
      appendIcon = null,
      children,
      ...rest
    } = props;

    const buttonStyle = getButtonStyling(variant, size, disabled || loading);
    const buttonIconStyle = getIconStyling(size);

    return (
      <button
        ref={ref}
        type={type}
        className={`${buttonStyle} ${className}`}
        disabled={disabled || loading}
        {...rest}
      >
        {prependIcon && (
          <div className={buttonIconStyle}>
            {cloneElement(prependIcon, { strokeWidth: 2 })}
          </div>
        )}

        {children}
        {loading && <Loader size="sm" />}

        {appendIcon && (
          <div className={buttonIconStyle}>
            {cloneElement(appendIcon, { strokeWidth: 2 })}
          </div>
        )}
      </button>
    );
  }
);
