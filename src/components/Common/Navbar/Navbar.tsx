import { Link, useNavigate } from "react-router-dom";
// components
import { Button } from "@components/Button";
// hooks
import useAuth from "@hooks/useAuth";
// helpers
import { NAV_LINK } from "./helper";
// assets
import Logo from "@assets/Common/logo-black.png";

export const Navbar = () => {
  // hooks
  const { handleLogoutSession } = useAuth();
  const handleSignOut = () => {
    handleLogoutSession();
  };

  const navigate = useNavigate();

  // handlers
  const handleLogoRedirection = () => {
    navigate("/dashboard");
  };

  return (
    <div className=" w-full">
      <div
        className="hidden sm:flex items-center justify-between  w-full 
      px-5 lg:px-10 xl:px-14 2xl:px-20 
      py-5"
      >
        <button className="flex items-center" onClick={handleLogoRedirection}>
          <img src={Logo} height="auto" width={132} alt="logo" />
        </button>
        <div className="flex items-center gap-8">
          {NAV_LINK.map((link) => (
            <Link
              to={link.path}
              key={link.key}
              className="text-[var(--text-nav)] text-sm 3xl:text-base font-semibold"
            >
              {link.title}
            </Link>
          ))}
          <Button variant="secondary" onClick={handleSignOut} size="sm">
            Sign Out
          </Button>
        </div>
      </div>
      <div
        className="flex sm:hidden items-center justify-between h-full w-full px-5 lg:px-10 xl:px-14 2xl:px-20 
      py-5 3xl:py-10"
      >
        <div className="flex items-center">
          <img src={Logo} height="auto" width={132} alt="logo" />
        </div>
        <span>Menu</span>
      </div>
    </div>
  );
};
