import { FC } from "react";
// helper
import { getLoaderStyling } from "./helper";

type LoaderProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Loader: FC<LoaderProps> = (props) => {
  const { className = "", size = "md" } = props;

  // get the current size loader style
  const currentSizeLoaderStyle = getLoaderStyling(size);

  return <div className={`${currentSizeLoaderStyle} ${className}`} />;
};
