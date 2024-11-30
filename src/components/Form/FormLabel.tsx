// helpers
import { cn } from "src/utils/common.helper"

export const FormLabel = ({
  name,
  className,
  isRequired = false,
  children,
  ...rest
}) => (
  <label
    htmlFor={name}
    className={cn(
      "text-xs xl:text-sm font-medium text-[--text-grey-dark]",
      {
        "after:content-['*'] after:ml-0.5 after:text-red-500": isRequired,
      },
      className
    )}
    {...rest}
  >
    {children}
  </label>
)
