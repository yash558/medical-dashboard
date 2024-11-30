import React, { useState } from "react"
import { Controller } from "react-hook-form"
// country-region-data
import countryRegionData from "country-region-data/dist/data-umd"
// components
import { Autocomplete } from "@mui/material"
import { FormLabel } from "@components/Form"
import { ResponsiveText } from "@components/Typography"
// assets
import { DownArrowIcon } from "@assets/icons/DownArrow"
// helpers
import { cn } from "src/utils/common.helper"

export const ProvinceSelect = ({
  watch,
  control,
  errors,
  inputClassName,
  disabled,
}) => {
  // state
  const [isProvinceFocused, setIsProvinceFocused] = useState(false)
  // country province options
  const countryProvinceOptions =
    countryRegionData
      .find((country) => country?.countryName === watch("country"))
      ?.regions.map((region) => ({
        label: region?.name,
        code: region?.shortCode,
      })) || []
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <FormLabel name="province" isRequired>
        State
      </FormLabel>
      <Controller
        control={control}
        name="province"
        rules={{
          required: "Province is required",
        }}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            id="province"
            name="province"
            value={value}
            // onChange={onChange}
            onChange={(e, newValue) => {
              onChange(newValue?.label)
            }}
            options={countryProvinceOptions}
            open={isProvinceFocused}
            onOpen={() => setIsProvinceFocused(true)}
            onClose={() => setIsProvinceFocused(false)}
            noOptionsText="Select a country first"
            renderInput={(params) => (
              <div
                ref={params.InputProps.ref}
                className="relative flex items-center rounded-md w-full"
              >
                <DownArrowIcon
                  onClick={() => setIsProvinceFocused(!isProvinceFocused)}
                  className={`absolute right-3.5 h-4 w-4 text-[var(--text-secondary)] ${isProvinceFocused ? "rotate-180" : ""}`}
                />
                <input
                  type="text"
                  placeholder="State"
                  {...params.inputProps}
                  className={cn(
                    "flex items-center w-full rounded-lg text-base py-2.5 px-3.5 border border-[var(--border-theme-primary)] focus:border-[var(--border-theme-primary)]",
                    { "border-[var(--border-error)]": errors?.province },
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
      {errors?.province?.message && (
        <ResponsiveText size="xs" variant="error">
          {errors?.province?.message}
        </ResponsiveText>
      )}
    </div>
  )
}
