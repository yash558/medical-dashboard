import React, { useState } from "react";
// react-hook-form
import { Controller } from "react-hook-form";
// components
import { FormLabel } from "./FormLabel";
import { ResponsiveText } from "@components/Typography";
import { Input } from "@components/Input";
// helpers
import { cn } from "src/utils/common.helper";

export const ConfirmPasswordInput = ({
  password,
  repeatPassword,
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
  isRequired = false,
}) => {
  const [isRetryPasswordInputFocused, setIsRetryPasswordInputFocused] =
    useState(false);

  const renderPasswordMatchError =
    repeatPassword.length >= password.length || !isRetryPasswordInputFocused;
  return (
    <div className={cn("flex flex-col gap-2", containerClassName)}>
      <FormLabel name={name} isRequired={isRequired}>
        {labelElement || label}
      </FormLabel>
      {customInput ? (
        <>{customInput}</>
      ) : (
        <>
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
                  className={cn(
                    "flex items-center h-full w-full",
                    inputClassName
                  )}
                  onFocus={() => setIsRetryPasswordInputFocused(true)}
                  onBlur={() => setIsRetryPasswordInputFocused(false)}
                />
              )}
            />
          </div>
        </>
      )}
      {!!repeatPassword &&
        password !== repeatPassword &&
        renderPasswordMatchError && (
          <ResponsiveText size="xs" variant="error">
            Passwords don{"'"}t match
          </ResponsiveText>
        )}
    </div>
  );
};
