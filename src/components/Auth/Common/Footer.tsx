// assets
import { MailIcon } from "@assets/icons/Mail-icon";

export const FormFooter = () => (
  <div
    className="hidden md:flex items-start justify-between flex-shrink-0
    gap-3 text-[var(--text-secondary)]"
  >
    <div className="flex items-center gap-1 flex-shrink-0">
      <MailIcon className="h-3.5 w-3.5" />
      <p className="text-xs">{`help@orbsway.com`} </p>
    </div>
    <p className="text-xs whitespace-pre-line flex-shrink-0">
      {`By signing up, you agree to our Terms and \n Conditions and Privacy Policy`}
    </p>
  </div>
);
