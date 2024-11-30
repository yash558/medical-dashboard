// components
import { FormInput } from "./FormInput"
import { FormLabel } from "./FormLabel"
import { ResponsiveText } from "@components/Typography"
// helpers
import { cn } from "src/utils/common.helper"

export const InputWithLabel: React.FC<{
  label: string,
  labelElement?: React.ReactNode,
  name: string,
  rules: any,
  type: string,
  icon: React.ReactNode,
  placeholder: string,
  control: any,
  errors: any,
  customInput: React.ReactNode,
  containerClassName: string,
  inputContainerClassName: string,
  inputClassName: string,
  isRequired: boolean,
  disabled: boolean,
  labelClassName: string,
}> = ({
  label,
  labelElement,
  name,
  rules,
  type,
  icon,
  placeholder,
  control,
  errors,
  customInput,
  containerClassName,
  inputContainerClassName,
  inputClassName,
  isRequired,
  disabled,
  labelClassName,
}) => (
  <div className={cn("flex flex-col gap-2", containerClassName)}>
    <FormLabel name={name} isRequired={isRequired} className={labelClassName}>
      {labelElement || label}
    </FormLabel>
    {customInput ? (
      <>{customInput}</>
    ) : (
      <>
        <FormInput
          name={name}
          rules={rules}
          type={type}
          icon={icon}
          placeholder={placeholder}
          inputContainerClassName={inputContainerClassName}
          inputClassName={inputClassName}
          control={control}
          errors={errors}
          disabled={disabled}
        />
      </>
    )}
    {errors[name]?.message && (
      <ResponsiveText size="xs" variant="error" className="text-red-500">
        {errors[name]?.message}
      </ResponsiveText>
    )}
  </div>
)
