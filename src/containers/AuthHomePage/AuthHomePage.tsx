import { useEffect } from "react";
import { useNavigate } from "react-router";
// components
import { AuthHome } from "@components/Auth/AuthHome";
// hooks
import useWindowSize from "@hooks/useWindowSize";

const AuthHomePage: React.FC = () => {
  // hooks
  const navigate = useNavigate();
  const windowSize = useWindowSize();

  // handlers
  const handleSignUp = () => navigate("/sign-up");
  const handleSignIn = () => navigate("/sign-in");

  useEffect(() => {
    // redirect to sign-in page if window size is greater than 1024
    if (windowSize.width > 1024) {
      navigate("/sign-in");
    }
  }, [windowSize, navigate]);

  return windowSize.width > 1024 ? null : (
    <AuthHome handleSignUp={handleSignUp} handleSignIn={handleSignIn} />
  );
};

export default AuthHomePage;
