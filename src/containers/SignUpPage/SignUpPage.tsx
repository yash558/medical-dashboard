import { useState } from "react";
// layouts
import AuthLayout from "src/layouts/AuthLayout/AuthLayout";
// components
import { SignUpForm } from "@components/Auth/SignUpForm";

const SignUpPage = () => {
  const [formSteps, setFormSteps] = useState(1);

  const updateFormSteps = (step: number) => setFormSteps(step);

  return (
    <AuthLayout>
      <SignUpForm formSteps={formSteps} updateFormSteps={updateFormSteps} />
    </AuthLayout>
  );
};

export default SignUpPage;
