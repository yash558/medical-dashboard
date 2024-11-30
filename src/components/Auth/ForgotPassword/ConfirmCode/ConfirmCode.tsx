import { useEffect, useState } from "react"
// redux
import { useSelector } from "react-redux"
// react hook form
import { Controller, useForm } from "react-hook-form"
// react-otp-input
import OtpInput from "react-otp-input"
// components
import { Button } from "@components/Button"
import { FormWrapper } from "@components/Form"
import { ResponsiveText } from "@components/Typography"
// hooks
import useTimer from "@hooks/useTimer"
import useAuth from "@hooks/useAuth"

export const ConfirmCode = ({ email, handleOnSubmit }) => {
  // state
  const [isRequestingNewCode, setIsRequestingNewCode] = useState(false)
  const {
    verifyCodeError,
    isForgotPasswordLoading,
    isVerifyTokenPasswordLoading,
  } = useSelector((state) => state.auth)
  const { handleForgotPassword } = useAuth()
  // react hook form
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm({
    defaultValues: {
      code: "",
    },
  })

  const { timer: resendTimerCode, setTimer: setResendCodeTimer } = useTimer(30)

  const handleResendCode = () => {
    setIsRequestingNewCode(true)
    setResendCodeTimer(30)
    // then set the requesting new code to false
    setIsRequestingNewCode(false)
  }

  const handleResendCodeClick = () => {
    handleForgotPassword({ email }, null, null, null, handleResendCode)
  }

  // set timer to get code on initial render
  useEffect(() => {
    handleResendCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (verifyCodeError) {
      setError("code", { message: "Wrong code, please try again" })
    }
  }, [verifyCodeError])

  // disable button if requesting new code or timer is running
  const isRequestNewCodeDisabled = isRequestingNewCode || resendTimerCode > 0
  // disable button if requesting new code
  const isButtonDisabled =
    isRequestingNewCode || watch("code").length < 4 || errors.code

  return (
    <FormWrapper asDiv>
      <FormWrapper onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="relative flex items-center rounded-md">
          <Controller
            control={control}
            name="code"
            rules={{
              required: "OTP is required",
              // validate: (value) => validateCode(value),
            }}
            render={({ field: { value, onChange } }) => (
              <OtpInput
                value={value}
                onChange={onChange}
                numInputs={4}
                containerStyle={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                  height: "80px",
                  width: "100%",
                }}
                inputStyle={{
                  columnSpan: "1",
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                  fontSize: "48px",
                  lineHeight: "48px",
                  caretColor: "transparent",
                }}
                placeholder="0000"
                inputType="number"
                shouldAutoFocus
                renderInput={(props) => (
                  <input
                    id="code"
                    name="code"
                    {...props}
                    className={`border border-[var(--border-secondary)] p-2 h-full w-full rounded-lg focus:border-[var(--border-theme-primary)] ${errors.code ? "border-[var(--border-error)]" : ""}`}
                  />
                )}
              />
            )}
          />
        </div>

        <Button
          variant="primary"
          type="submit"
          size="md"
          disabled={isButtonDisabled}
          loading={isVerifyTokenPasswordLoading}
        >
          Verify
        </Button>
      </FormWrapper>
      {Boolean(errors.code) && (
        <div className="flex items-center justify-center">
          <ResponsiveText size="sm" variant="error">
            {errors?.code?.message}
          </ResponsiveText>
        </div>
      )}
      <div className="flex items-center justify-center">
        <Button
          className="text-[var(--text-theme)] !p-0 !w-min"
          onClick={handleResendCodeClick}
          disabled={isRequestNewCodeDisabled || isForgotPasswordLoading}
          loading={isForgotPasswordLoading}
          variant="transparent"
        >
          {resendTimerCode > 0
            ? `Resend code in ${resendTimerCode}s`
            : isRequestingNewCode
              ? "Requesting new code"
              : "Resend code"}
        </Button>
      </div>
    </FormWrapper>
  )
}
