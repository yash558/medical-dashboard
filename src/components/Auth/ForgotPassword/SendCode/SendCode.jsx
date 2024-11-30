// route
import { useNavigate } from "react-router";
// redux
import { useSelector } from "react-redux";
// react hook form
import { useForm } from "react-hook-form";
// components
import { Button } from "@components/Button";
import { ResponsiveText } from "@components/Typography";
import { FormWrapper, InputWithLabel } from "@components/Form";
// assets
import { MailIcon } from "@assets/icons/Mail-icon";

export const SendCode = ({ handleOnSubmit }) => {
  // react hook form
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  // hooks
  const navigate = useNavigate();
  const { isForgotPasswordLoading } = useSelector((state) => state.auth);

  // handler
  const handleLoginIn = () => {
    navigate("/sign-in");
  };

  const emailRules = {
    required: "Email is required",
    // pattern: {
    // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // message: "Invalid email address",
    // },
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(handleOnSubmit)}>
        <InputWithLabel
          label="Email"
          name="email"
          rules={emailRules}
          icon={
            <MailIcon className="absolute left-3.5 h-5 w-5 text-[var(--text-secondary)]" />
          }
          placeholder="olivia@untitledui.com"
          inputClassName="!pl-10"
          control={control}
          errors={errors}
        />

        <Button
          size="md"
          variant="primary"
          type="submit"
          loading={isForgotPasswordLoading}
        >
          Send Code
        </Button>

        <ResponsiveText
          size="sm"
          className="flex items-center justify-center gap-2 font-medium"
        >
          Remember password?{" "}
          <button className="text-[var(--text-theme)]" onClick={handleLoginIn}>
            Log in
          </button>
        </ResponsiveText>
      </FormWrapper>
    </>
  );
};
