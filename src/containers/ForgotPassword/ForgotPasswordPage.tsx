import { useState } from "react";
// route
import { useNavigate } from "react-router";
// components
import { FormNav } from "@components/Auth/Common";
import {
  ConfirmCode,
  Confirmation,
  ResetPassword,
  SendCode,
} from "@components/Auth/ForgotPassword";
// layout
import AuthLayout from "src/layouts/AuthLayout/AuthLayout";
// assets
import useAuth from "@hooks/useAuth";
import { CheckCircleIcon } from "@assets/icons/CheckCircle";
import { ResponsiveText } from "@components/Typography";

const ForgotPasswordPage = () => {
  // state
  const [formSteps, setFormSteps] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(null);
  const {
    handleForgotPassword,
    handleResetPassword,
    handleVerifyTokenPassword,
  } = useAuth();
  // hooks
  const navigate = useNavigate();

  // handle step change
  const handleStepChange = (data: any, nextStep: number) => {
    if (nextStep === 2) {
      setEmail(data.email);
      handleForgotPassword(data, null, setFormSteps, nextStep);
    }
    if (nextStep === 3) {
      handleVerifyTokenPassword(
        { token: data?.code, email },
        setFormSteps,
        nextStep
      );
      if (data.code) {
        setOtp(data.code);
      }
    }
    if (nextStep === 4) {
      if (otp) {
        handleResetPassword(
          {
            password: data?.repeatPassword,
            email,
            token: otp,
          },
          
          null,
          setFormSteps,
          nextStep
        );
      }
    }
  };

  const updateFormSteps = (step: number) => setFormSteps(step);

  const formStepComponents = [
    {
      key: 1,
      heading: "Forgot Password?",
      subHeading: `Don’t worry! It happens. Please enter the email \n associated with your account.`,
      form: (
        <SendCode
          // handleOnSubmit={() => setFormSteps((prev) => prev + 1)}
          handleOnSubmit={(data: any) => handleStepChange(data, 2)}
        />
      ),
    },
    {
      key: 2,
      heading: "Please Check your email",
      subHeading: `We’ve sent a code to ${email}`,
      form: (
        <ConfirmCode
          email={email}
          // handleOnSubmit={() => setFormSteps((prev) => prev + 1)}
          handleOnSubmit={(data: any) => handleStepChange(data, 3)}
        />
      ),
    },
    {
      key: 3,
      heading: "Reset Password",
      subHeading: `Please type something you’ll remember`,
      form: (
        <ResetPassword
          // handleOnSubmit={() => setFormSteps((prev) => prev + 1)}
          handleOnSubmit={(data: any) => handleStepChange(data, 4)}
        />
      ),
    },
    {
      key: 4,
      heading: "Password Reset Successful",
      subHeading: `Your password has been successfully reset`,
      form: <Confirmation handleOnSubmit={() => navigate("/sign-in")} />,
    },
  ];

  const currentFormStepComponent = formStepComponents.find(
    (step) => step.key === formSteps
  );

  if (!currentFormStepComponent) return <></>;

  return (
    <AuthLayout>
      {formSteps === 4 ? (
        <div className="flex flex-col items-center gap-4 p-5 w-full">
          <CheckCircleIcon className="w-36 h-36 text-[var(--text-green)]" />

          <ResponsiveText
            size="md"
            variant="theme"
            className="text-[var(--text-theme-primary)]"
          >
            {currentFormStepComponent.heading}
          </ResponsiveText>
          <ResponsiveText
            variant="theme"
            size="sm"
            className="text-[var(--text-theme-primary)]"
          >
            {currentFormStepComponent.subHeading}
          </ResponsiveText>
        </div>
      ) : (
        <FormNav
          title={currentFormStepComponent.heading}
          subHeading={currentFormStepComponent.subHeading}
          stepTitle={currentFormStepComponent.heading}
          totalSteps={4}
          formSteps={formSteps}
          updateFormSteps={updateFormSteps}
        />
      )}
      {currentFormStepComponent.form}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
