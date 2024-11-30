// hooks
import { useNavigate } from "react-router";
// assets
import { LeftArrowIcon, LeftArrowWithBorderIcon } from "@assets/icons";

export const BackRedirectionButton = () => {
  // hooks
  const navigate = useNavigate();

  // handle redirection
  const handleRedirection = () => navigate(-1);
  return (
    <>
      <button
        className="hidden md:flex items-center gap-2 w-full "
        onClick={handleRedirection}
      >
        <LeftArrowIcon className="h-5 w-5 text-[var(--text-primary)]" />
        <span className="h-6">
          <p className="text-sm font-bold text-[var(--text-theme)]">Back</p>
        </span>
      </button>
      <button className="block md:hidden" onClick={handleRedirection}>
        <LeftArrowWithBorderIcon className="h-6 w-6 text-[var(--border-primary)]" />
      </button>
    </>
  );
};
