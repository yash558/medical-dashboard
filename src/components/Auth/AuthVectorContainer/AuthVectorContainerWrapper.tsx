// assets
import Logo from "@assets/Common/logo.svg"
import { useSearchParams } from "react-router-dom"
export const AuthVectorContainerWrapper = ({ children }) => {
  const [searchParams] = useSearchParams()
  const onboarding = searchParams.get("onboarding")

  return (
    <div
      className={`${onboarding === "true" ? "grow block" : "hidden grow-0"} md:grow-0 md:flex flex-col min-h-full 
    text-[var(--pure-white)] bg-[var(--primary-blue)] 
    gap-4 xl:gap-5 2xl:gap-6  3xl:gap-7 
    w-full md:w-2/5 lg:w-1/2 xl:w-3/5
    py-6 lg:py-7 xl:py-8 2xl:py-10 3xl:py-20 relative`}
    >
      <div
        className="flex items-center flex-shrink-0 
      px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20"
      >
        <img src={Logo} height="auto" width={188} alt="logo" />
      </div>
      <div
        className="flex flex-col flex-grow
      px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-20
      gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-8"
      >
        {children}
      </div>
    </div>
  )
}
