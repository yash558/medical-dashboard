// layouts
import AuthLayout from "src/layouts/AuthLayout/AuthLayout";
// components
import { LoginForm, LoginFormImage } from "@components/Auth/LoginForm";
import { LoginFormContent } from "@components/Auth/LoginForm/LoginFormContent";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginFormImage />
      <LoginFormContent />
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
