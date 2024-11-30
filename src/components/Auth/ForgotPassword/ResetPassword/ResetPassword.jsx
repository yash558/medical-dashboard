import { useState, useEffect } from "react"
// react hook form
import { useForm, useWatch } from "react-hook-form"
// components
import { Button } from "@components/Button"
import { FormWrapper, InputWithLabel } from "@components/Form"
// assets
import { EyeOffIcon } from "../../../../assets/icons/EyeOff"
import EyeIcon from "../../../../assets/icons/Eye"
import { useSelector } from "react-redux"

export const ResetPassword = ({ handleOnSubmit }) => {
  // state
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  })
  const { isResetPasswordLoading } = useSelector((state) => state.auth)

  // react hook form
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  })

  const password = useWatch({ control, name: "password" })
  const repeatPassword = useWatch({ control, name: "repeatPassword" })

  const passwordRules = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 50,
      message: "Password must be at most 50 characters",
    },
  }

  const handleShowPassword = (key) =>
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }))

  const TogglePasswordIcon = ({ isVisible, toggleVisibility }) => {
    const Icon = isVisible ? EyeIcon : EyeOffIcon
    return (
      <Icon
        className="absolute right-3.5 h-5 w-5 text-[var(--text-secondary)] hover:cursor-pointer"
        onClick={toggleVisibility}
      />
    )
  }

  // check if password and repeat password are same and password is not empty and repeat password is not empty
  useEffect(() => {
    if (password !== repeatPassword) {
      setError("repeatPassword", {
        type: "manual",
        message: "Passwords do not match",
      })
    } else {
      clearErrors("repeatPassword")
    }
  }, [password, repeatPassword, setError, clearErrors])

  const isButtonDisabled =
    watch("password") === "" ||
    watch("repeatPassword") === "" ||
    watch("password") !== watch("repeatPassword") ||
    Boolean(errors.password)

  return (
    <FormWrapper onSubmit={handleSubmit(handleOnSubmit)}>
      {/* Password */}
      <InputWithLabel
        label="Password"
        name="password"
        rules={passwordRules}
        type={showPassword.password ? "text" : "password"}
        icon={
          <TogglePasswordIcon
            isVisible={showPassword.password}
            toggleVisibility={() => handleShowPassword("password")}
          />
        }
        placeholder="must be 8 characters"
        inputClassName="!pr-10"
        control={control}
        errors={errors}
      />
      {/* Confirm Password */}
      <InputWithLabel
        label="Confirm Password"
        name="repeatPassword"
        rules={passwordRules}
        type={showPassword.repeatPassword ? "text" : "password"}
        icon={
          <TogglePasswordIcon
            isVisible={showPassword.repeatPassword}
            toggleVisibility={() => handleShowPassword("repeatPassword")}
          />
        }
        placeholder="repeat password"
        inputClassName="!pr-10"
        control={control}
        errors={errors}
      />

      <Button
        variant="primary"
        type="submit"
        size="md"
        disabled={isButtonDisabled}
        loading={isResetPasswordLoading}
      >
        Set Password
      </Button>
    </FormWrapper>
  )
}
