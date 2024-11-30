import React, { useState } from "react"
import { useNavigate } from "react-router"
import { Controller } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Button } from "@components/Button"
import { ConfirmPasswordInput, InputWithLabel } from "@components/Form"
import EyeIcon from "../../../../assets/icons/Eye"
import { EyeOffIcon } from "../../../../assets/icons/EyeOff"
import { MailIcon } from "../../../../assets/icons/Mail-icon"

export const ContactDetails: React.FC<{ watch: any, control: any, errors: any }> = ({ watch, control, errors }) => {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleSignInRedirection = () => navigate(`/sign-in`)

  const handleShowPassword = () => setShowPassword(!showPassword)

  const TogglePasswordIcon: React.FC<{ isVisible: boolean, toggleVisibility: () => void }> = ({ isVisible, toggleVisibility }) => {
    const Icon = isVisible ? EyeIcon : EyeOffIcon
    return (
      <Icon
        className="absolute right-3.5 h-5 w-5 text-[var(--text-secondary)] hover:cursor-pointer"
        onClick={toggleVisibility}
      />
    )
  }

  const passwordRules = {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 50,
      message: "Password must be at most 50 characters",
    },
  }

  const password = watch("password")
  const repeatPassword = watch("repeatPassword")

  const currentFormField = ["contact", "email", "password", "repeatPassword"]

  const currentFormErrors = Object.keys(errors).filter((key) =>
    currentFormField.includes(key)
  )

  const isButtonDisabled =
    password !== repeatPassword || Object.keys(currentFormErrors)?.length > 0

  return (
    <>
      {/* Contact */}
      <InputWithLabel
        label="Contact"
        name="contact"
        rules={{
          required: "Contact is required",
        }}
        placeholder="0000000000"
        control={control}
        errors={errors}
        customInput={
          <Controller
            control={control}
            name="contact"
            rules={{
              required: "Contact is required",
            }}
            render={({ field: { value, onChange } }) => (
              <PhoneInput
                country={"us"}
                value={value}
                onChange={onChange}
                autoFormat
                inputProps={{
                  placeholder: "0000000000",
                  className: `h-11 !w-full !pl-12 focus:outline-none rounded-lg border border-[--primary-blue] ${errors.contact ? "border-[var(--border-error)]" : ""} focus:border-[--primary-blue]`,
                }}
                buttonClass="!bg-white !border-none !rounded-lg !top-1.5 !bottom-1.5 !left-1"
                containerStyle={{
                  width: "100%",
                  border: "none",
                }}
                inputStyle={{
                  borderRadius: "8px",
                }}
              />
            )}
          />
        }
        isRequired
      />

      {/* Email */}
      <InputWithLabel
        label="Email"
        name="email"
        rules={{
          required: "Email is required",
        }}
        icon={
          <MailIcon className="absolute left-3.5 h-5 w-5 text-[var(--text-secondary)]" />
        }
        placeholder="johndoe@gmail.com"
        control={control}
        errors={errors}
        inputClassName="!pl-10"
        isRequired
        type="email"
      />
      {/* Password */}
      <InputWithLabel
        label="Password"
        name="password"
        rules={passwordRules}
        type={showPassword ? "text" : "password"}
        icon={
          <TogglePasswordIcon
            isVisible={showPassword}
            toggleVisibility={() => handleShowPassword()}
          />
        }
        placeholder="must be 6 characters or more"
        inputClassName="!pr-10"
        control={control}
        errors={errors}
        isRequired
      />
      {/* Confirm Password */}
      <ConfirmPasswordInput
        password={password}
        repeatPassword={repeatPassword}
        label="Confirm Password"
        name="repeatPassword"
        rules={passwordRules}
        type={showPassword ? "text" : "password"}
        icon={
          <TogglePasswordIcon
            isVisible={showPassword}
            toggleVisibility={() => handleShowPassword()}
          />
        }
        placeholder="repeat password"
        inputClassName="!pr-10"
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
      <Button variant="secondary" size="md" onClick={handleSignInRedirection}>
        ALREADY HAVE AN ACCOUNT? SIGN IN
      </Button>
    </>
  )
}
