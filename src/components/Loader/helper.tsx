import styles from "./Loader.module.css";

export type TLoaderSizes = "sm" | "md" | "lg";

export const getLoaderStyling = (size: TLoaderSizes = "md"): string => {
  const currentLoaderStyle = styles.spinner;
  const currentLoaderSizeStyle = styles[`${size}-spinner`];

  const tempSize = currentLoaderSizeStyle;
  return `${currentLoaderStyle} ${tempSize}`;
};

// NOTE: This is a helper function to get the styling for the loader, i added this helper function to make the code more readable and maintainable, and if in future we need to add more styles or modify the existing styles, we can do it in this helper function.
