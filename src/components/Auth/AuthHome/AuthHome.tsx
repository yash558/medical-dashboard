// components
import { Button } from "@components/Button";
import { ResponsiveText } from "@components/Typography";
// asset
import Logo from "@assets/Common/logo.svg";
import Vector from "@assets/AuthPage/vector.svg";

export const AuthHome: React.FC<{ handleSignUp: () => void, handleSignIn: () => void }> = ({ handleSignUp, handleSignIn }) => (
  <div className="flex min-h-svh w-full overflow-hidden">
    <div className="flex flex-col overflow-y-auto gap-3 w-full text-[var(--pure-white)] bg-[var(--primary-blue)]">
      <div className="flex flex-col gap-3 p-8 pt-4 h-full flex-grow">
        <img src={Logo} height="auto" width={142} alt="logo" />

        <ResponsiveText variant="h1" size="rg" className="font-thin whitespace-pre-line">
          {`Your eyes, \n our expertise`}
        </ResponsiveText>

        <div className="flex items-center justify-center flex-grow h-full w-full">
          <span
            style={{
              backgroundImage: `url(${Vector})`,
            }}
            className="flex-grow bg-no-repeat h-full w-full max-w-[550px] bg-center bg-contain "
          />
        </div>

        <ResponsiveText variant="h1" size="base" className="font-thin whitespace-pre-line">
          {`Join the vision revolution: Expert-endorsed eye \n exercises to enhance your eyesight – Get started \n today`}
        </ResponsiveText>
      </div>
      <div className="flex flex-col items-center flex-shrink-0 gap-4 px-8 py-10 rounded-t-[40px] bg-[var(--pure-white)]">
        <Button onClick={handleSignUp} className="w-full max-w-96">
          SIGN UP
        </Button>
        <Button
          onClick={handleSignIn}
          variant="secondary"
          className="w-full max-w-96"
        >
          Already have a account? Sign in
        </Button>
      </div>
    </div>
  </div>
);
