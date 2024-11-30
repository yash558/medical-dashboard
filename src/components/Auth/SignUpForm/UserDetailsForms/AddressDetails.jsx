// components
import { Button } from "@components/Button"
import { InputWithLabel } from "@components/Form"
import { CountrySelect } from "./CountrySelect"
import { ProvinceSelect } from "./ProvinceSelect"

export const AddressDetails = ({ watch, control, errors, setValue }) => {
  const currentFormField = ["country", "province", "pincode", "address"]

  const currentFormErrors = Object.keys(errors).filter((key) =>
    currentFormField.includes(key)
  )

  const isButtonDisabled = Object.keys(currentFormErrors)?.length > 0
  return (
    <>
      {/* Country */}
      <CountrySelect control={control} errors={errors} setValue={setValue} />
      <div className="flex justify-between gap-3 md:gap-5">
        {/* State */}
        <ProvinceSelect watch={watch} control={control} errors={errors} />

        {/* Pincode */}
        <InputWithLabel
          label="Pincode"
          name="pincode"
          rules={{
            required: "Pincode is required",
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: "Pincode must be alphanumeric",
            },
            minLength: {
              value: 1,
              message: "Pincode must be at least 1 character",
            },
            maxLength: {
              value: 30,
              message: "Pincode must be at most 30 characters",
            },
          }}
          type="text"
          placeholder="500075"
          control={control}
          errors={errors}
          inputClassName="tracking-[12.5px] uppercase"
          containerClassName="w-1/2"
          isRequired
        />
      </div>
      {/* Address */}
      <InputWithLabel
        label="Address"
        name="address"
        rules={{
          required: "Address is required",
          minLength: {
            value: 5,
            message: "Address must be at least 5 characters",
          },
          maxLength: {
            value: 60,
            message: "Address must be at most 60 characters",
          },
        }}
        type="text"
        placeholder="Add apartment, suite, unit, or additional details"
        control={control}
        errors={errors}
        isRequired
      />

      <Button
        variant="primary"
        type="submit"
        size="md"
        disabled={isButtonDisabled}
      >
        SAVE AND PROCEED
      </Button>
    </>
  )
}
