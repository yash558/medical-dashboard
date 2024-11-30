import { useState } from "react"
// route
import { useNavigate } from "react-router"
// react hook form
import { useForm } from "react-hook-form"
// components
import { Button } from "@components/Button"
import { FormWrapper, InputWithLabel } from "@components/Form"
import { ResponsiveText } from "@components/Typography"
// assets
import { MailIcon } from "../../../assets/icons/Mail-icon"
import { EyeOffIcon } from "../../../assets/icons/EyeOff"
import EyeIcon from "../../../assets/icons/Eye"
// hooks
import useAuth from "@hooks/useAuth"
import { useSelector } from "react-redux"

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
  })
  const authState = useSelector((state: any) => {
    return state.auth
  })
  // router
  const navigate = useNavigate()
  const { handleSignIn } = useAuth()

  // react hook form
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // handler
  const onSubmit = (data: any) => {
    handleSignIn(data)
  }

  const handleSignUp = () => navigate(`/sign-up`)

  const handleShowPassword = (key: string) =>
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }))

  const TogglePasswordIcon = ({
    isVisible,
    toggleVisibility,
  }: {
    isVisible: boolean
    toggleVisibility: () => void
  }) => {
    const Icon = isVisible ? EyeIcon : EyeOffIcon
    return (
      <Icon
        className="absolute right-3.5 h-5 w-5 text-[var(--primary-grey)] hover:cursor-pointer"
        onClick={toggleVisibility}
      />
    )
  }

  const emailRules = {
    required: "Email is required",
  }

  const passwordRules = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        label="Email"
        name="email"
        rules={emailRules}
        icon={
          <MailIcon className="absolute left-3.5 h-5 w-5 text-[var(--primary-grey)]" />
        }
        placeholder="olivia@untitledui.com"
        inputClassName="!pl-10"
        control={control}
        errors={errors}
        tabIndex={1}
      />
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
        placeholder="Enter password"
        inputClassName="!pr-10"
        control={control}
        errors={errors}
        tabIndex={2}
      />
      <ResponsiveText size="sm" className="flex items-center justify-end">
        <a href="/forgot-password" tabIndex={3}>
          Forgot password?
        </a>
      </ResponsiveText>

      <Button
        variant="primary"
        // className="bg-blue-800 text-[--pure-white] hover:bg-[--blue-dark] h-12"
        type="submit"
        size="md"
        tabIndex={4}
        loading={authState.isSigninLoading}
      >
        SIGN IN
      </Button>
      <Button variant="secondary" size="md" onClick={handleSignUp} tabIndex={5}>
        CREATE ACCOUNT
      </Button>
    </FormWrapper>
  )
}
