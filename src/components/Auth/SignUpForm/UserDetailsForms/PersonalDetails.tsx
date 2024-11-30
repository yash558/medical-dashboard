import React from "react"
import { useNavigate } from "react-router"
import { Control, Controller, FieldErrors, UseFormWatch } from "react-hook-form"
import "react-phone-input-2/lib/style.css"
// components
import { Button } from "@components/Button"
import { InputWithLabel } from "@components/Form"
// assets

interface PersonalDetailsProps {
  watch: UseFormWatch<any>
  control: Control<any>
  errors: FieldErrors
}

export const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  watch,
  control,
  errors,
}) => {
  const navigate = useNavigate()

  const handleSignInRedirection = () => navigate(`/sign-in`)

  const password = watch("password")
  const repeatPassword = watch("repeatPassword")

  const currentFormField = ["firstName", "lastName", "gender"]

  const currentFormErrors = Object.keys(errors).filter((key) =>
    currentFormField.includes(key)
  )

  const isButtonDisabled =
    password !== repeatPassword || Object.keys(currentFormErrors)?.length > 0

  return (
    <>
      <div className="flex justify-between gap-3 md:gap-5">
        {/* First Name */}
        <InputWithLabel
          label="First Name"
          name="firstName"
          rules={{
            required: "First name is required",
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: "First name must be alphanumeric",
            },
            minLength: {
              value: 1,
              message: "First name must be at least 1 character",
            },
            maxLength: {
              value: 30,
              message: "First name must be at most 30 characters",
            },
          }}
          placeholder="First Name"
          control={control}
          errors={errors}
          containerClassName="w-1/2"
          isRequired
        />
        {/* Last Name */}
        <InputWithLabel
          label="Last Name"
          name="lastName"
          rules={{
            required: "Last name is required",
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: "Last name must be alphanumeric",
            },
            minLength: {
              value: 1,
              message: "Last name must be at least 1 character",
            },
            maxLength: {
              value: 30,
              message: "Last name must be at most 30 characters",
            },
          }}
          placeholder="Last Name"
          control={control}
          errors={errors}
          containerClassName="w-1/2"
          isRequired
        />
      </div>

      <InputWithLabel
        label="Gender"
        name="gender"
        rules={{
          required: "gender is required",
        }}
        type="text"
        control={control}
        errors={errors}
        customInput={
          <div className="relative flex items-center rounded-md">
            <Controller
              control={control}
              name="gender"
              rules={{
                required: "gender is required",
              }}
              render={({ field: { onChange, ref } }) => (
                <div className="flex items-center w-full border border-gray-200 rounded-lg">
                  <div className="flex items-center w-1/3 gap-2 py-2.5 px-6 border-r">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={onChange}
                      ref={ref}
                      className="h-4 w-4 border-[var(--blue-lt)] "
                    />
                    <label className="text-sm font-semibold" htmlFor="male">
                      Male
                    </label>
                  </div>

                  <div className="flex items-center w-1/3 gap-2 py-2.5 px-6 border-r">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={onChange}
                      ref={ref}
                      className="h-4 w-4 border-[var(--blue-lt)]"
                    />
                    <label className="text-sm font-semibold" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center w-1/3 gap-2 py-2.5 px-6">
                    <input
                      type="radio"
                      id="others"
                      name="gender"
                      value="others"
                      onChange={onChange}
                      ref={ref}
                      className="h-4 w-4 border-[var(--blue-lt)]"
                    />
                    <label className="text-sm font-semibold" htmlFor="others">
                      Others
                    </label>
                  </div>
                </div>
              )}
            />
          </div>
        }
        isRequired
      />

      <Button
        variant="primary"
        type="submit"
        size="md"
        disabled={isButtonDisabled}
        className="bg-red-300"
      >
        SAVE AND PROCEED
      </Button>
      <Button variant="secondary" size="md" onClick={handleSignInRedirection}>
        ALREADY HAVE AN ACCOUNT? SIGN IN
      </Button>
    </>
  )
}
