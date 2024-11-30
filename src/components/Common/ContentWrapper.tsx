// helper
import { cn } from "src/utils/common.helper";

export const ContentWrapper = ({ children, className = "" }) => (
  <div className={cn("flex flex-col flex-grow h-full", className)}>
    {children}
  </div>
);
