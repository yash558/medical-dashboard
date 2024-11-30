// react-hook-form
import { Controller } from "react-hook-form"
// components
import { Input } from "@components/Input"
// helpers
import { cn } from "src/utils/common.helper"

export const FormInput = ({
  name,
  rules,
  type,
  icon,
  placeholder,
  control,
  errors,
  inputContainerClassName,
  inputClassName,
  disabled,
}) => (
  <div
    className={cn(
      "relative flex items-center rounded-md",
      inputContainerClassName
    )}
  >
    {icon && icon}
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          hasError={Boolean(errors[name])}
          placeholder={placeholder}
          className={cn("flex items-center h-full w-full", inputClassName)}
          disabled={disabled}
        />
      )}
    />
  </div>
)
