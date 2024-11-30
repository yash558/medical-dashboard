import React, { memo } from "react";
// component
import { BackRedirectionButton } from "./BackRedirectionButton";
// helper
import { cn } from "src/utils/common.helper";

export const HeaderWrapper = memo(
  ({ children, className = "", hideBackButton = false }) => (
    <div
      className={cn(
        "flex flex-col flex-shrink-0 md:items-center gap-5 md:gap-2 2xl:gap-3 3xl:gap-5 px-5 lg:px-10 xl:px-16 2xl:px-20",
        className
      )}
    >
      {!hideBackButton && <BackRedirectionButton />}
      {children}
    </div>
  )
);

HeaderWrapper.displayName = "HeaderWrapper";
