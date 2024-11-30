import styles from "./Button.module.css";

export type TBtnVariant = "primary" | "secondary" | "transparent";

export type TBtnSizes = "sm" | "md" | "lg";

export const getButtonStyling = (
  variant: TBtnVariant = "primary",
  size: TBtnSizes = "md",
  disabled: boolean = false
): string => {
  const currentVariantDefaultStyle = styles[`${variant}-default`];
  const currentVariantHoverStyle = styles[`${variant}-hover`];
  const currentVariantDisabledStyle = styles[`${variant}-disabled`];
  const currentSizeStyle = styles[`${size}-btn`];

  const tempVariant = `${currentVariantDefaultStyle} ${disabled ? currentVariantDisabledStyle : currentVariantHoverStyle}`;

  const tempSize = currentSizeStyle;
  return `${tempVariant} ${tempSize}`;
};

export const getIconStyling = (size: TBtnSizes = "md"): string => {
  const icon = styles[`${size}-icon`];
  return icon;
};
