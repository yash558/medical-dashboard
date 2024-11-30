import React, { useState } from "react"
import { Controller } from "react-hook-form"
// country-region-data
import { allCountries } from "country-region-data"
// components
import { Autocomplete, Box } from "@mui/material"
import { ResponsiveText } from "@components/Typography"
import { FormLabel } from "@components/Form"
// assets
import { DownArrowIcon } from "@assets/icons/DownArrow"
// helpers
import { cn } from "src/utils/common.helper"

export const CountrySelect = ({
  control,
  errors,
  setValue,
  inputClassName,
  disabled,
}) => {
  // state
  const [isCountryFocused, setIsCountryFocused] = useState(false)

  // country select options
  const countrySelectOptions = allCountries.map((country) => ({
    label: country[0],
    code: country[1],
  }))
  return (
    <div className="flex flex-col gap-2">
      <FormLabel name="country" isRequired>
        Country
      </FormLabel>
      <Controller
        control={control}
        name="country"
        rules={{
          required: "Country is required",
        }}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            id="country"
            name="country"
            options={countrySelectOptions}
            open={isCountryFocused}
            onOpen={() => setIsCountryFocused(true)}
            onClose={() => setIsCountryFocused(false)}
            value={value}
            onChange={(e, newValue) => {
              onChange(newValue?.label)
              setValue("province", "")
            }}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option?.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <div
                ref={params.InputProps.ref}
                className="relative flex items-center rounded-md w-full"
              >
                <DownArrowIcon
                  onClick={() => setIsCountryFocused(!isCountryFocused)}
                  className={`absolute right-3.5 h-4 w-4 text-[var(--text-secondary)] ${isCountryFocused ? "rotate-180" : ""}`}
                />
                <input
                  type="text"
                  placeholder="Country"
                  {...params.inputProps}
                  className={cn(
                    "flex items-center w-full rounded-lg text-base py-2.5 px-3.5 border border-[var(--border-theme-primary)] focus:border-[var(--border-theme-primary)]",
                    { "border-[var(--border-error)]": errors?.country },
                    inputClassName
                  )}
                  autoComplete="off"
                  isRequired
                  disabled={disabled}
                />
              </div>
            )}
          />
        )}
      />
      {errors?.country?.message && (
        <ResponsiveText size="xs" variant="error">
          {errors?.country?.message}
        </ResponsiveText>
      )}
    </div>
  )
}
