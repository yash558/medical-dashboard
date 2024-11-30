import React from "react";
import { useForm } from "react-hook-form";
import {
  AddressDetails,
  PersonalDetails,
  DoctorInfo,
  ContactDetails,
} from "./UserDetailsForms";
import { FormNav } from "../Common/Nav";
import { FormWrapper } from "@components/Form";
import useAuth from "@hooks/useAuth";

interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  contact: string;
  email: string;
  password: string;
  repeatPassword: string;
  country: string;
  province: string;
  pincode: string;
  address: string;
  instituteName: string;
}

interface SignUpFormProps {
  formSteps: number;
  updateFormSteps: (step: number) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ formSteps, updateFormSteps }) => {
  const { handleSignUp } = useAuth();

  const {
    control,
    watch,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      contact: "",
      email: "",
      password: "",
      repeatPassword: "",
      country: "",
      province: "",
      pincode: "",
      address: "",
      instituteName: "",
    },
  });

  // Submit handler
  const onSubmit = (data: FormValues) => {
    if (formSteps === 4) {
      handleSignUp({
        ...data,
        requestType: "Doctor",
      });
    } else {
      updateFormSteps(formSteps + 1);
    }
  };

  // Form steps
  const formStepComponents = [
    {
      key: 1,
      title: "Individual Info",
      form: <PersonalDetails watch={watch} control={control} errors={errors} />,
    },
    {
      key: 2,
      title: "Contact Info",
      form: <ContactDetails watch={watch} control={control} errors={errors} />,
    },
    {
      key: 3,
      title: "Address Info",
      form: (
        <AddressDetails
          watch={watch}
          control={control}
          errors={errors}
          setValue={setValue}
        />
      ),
    },
    {
      key: 4,
      title: "Doctor Info",
      form: (
        <DoctorInfo control={control} errors={errors} setValue={setValue} />
      ),
    },
  ];

  const currentFormStepComponent = formStepComponents.find(
    (step) => step.key === formSteps
  );

  return (
    <>
      {currentFormStepComponent && (
        <>
          <FormNav
            title="Create Account"
            subHeading="Create your account to get started"
            stepTitle={currentFormStepComponent.title}
            totalSteps={formStepComponents.length}
            formSteps={currentFormStepComponent.key}
            updateFormSteps={updateFormSteps}
          />
          <FormWrapper asDiv onSubmit={handleSubmit(onSubmit)}>
            {currentFormStepComponent.form}
          </FormWrapper>
        </>
      )}
    </>
  );
};
