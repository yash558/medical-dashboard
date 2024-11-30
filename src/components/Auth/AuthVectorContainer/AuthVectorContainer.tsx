// components
import PlusIcon from "@assets/icons/plusIcon"
import { AuthVectorContainerWrapper } from "./AuthVectorContainerWrapper"
import { AuthVectorHeader } from "./AuthVectorHeader"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const AuthVectorContainer = () => {
  const [searchParams] = useSearchParams()
  const onboarding = searchParams.get("onboarding")
  const isMobile = window.innerWidth < 824
  return (
    <AuthVectorContainerWrapper>
      <div className="xl:relative flex flex-col gap-8 flex-grow">
        <AuthVectorHeader />
      </div>

      {onboarding !== "true" || !isMobile ? (
        <div className="xl-tall:w-[25rem] 2xl-tall:w-[43.06rem] absolute right-0 bottom-0">
          <PlusIcon />
        </div>
      ) : (
        ""
      )}

      {onboarding === "true" && isMobile ? (
        <div
          className={`${onboarding === "true" ? "flex flex-col absolute right-0 left-0 bottom-0" : ""}`}
        >
          <div className="w-[12rem] [@media(min-height:700px)]:w-[15rem] [@media(min-height:800px)]:w-[21.5rem] xl-tall:w-[25rem] 2xl-tall:w-[43.06rem] ml-auto">
            <PlusIcon />
          </div>
          <div className="rounded-t-[2.5rem] bg-[--pure-white] h-[13.25rem] flex flex-col items-center gap-8 justify-center">
            <Link
              to="/sign-up"
              className="bg-[--primary-blue] py-2 px-4 rounded-lg
              h-11 flex items-center justify-center font-medium text-sm
              w-[20.3rem] tracking-[1.25px] text-[--pure-white]"
            >
              SIGN UP
            </Link>
            <Link
              to="/sign-in"
              className="bg-[--pure-white] text-[--primary-blue] border border-[--text-grey-light] tracking-[1.25px] text-sm font-medium py-2 px-4 rounded-lg h-11 flex items-center w-[20.3rem] font-['Roboto']"
            >
              ALREADY HAVE AN ACCOUNT? SIGN IN
            </Link>
          </div>
        </div>
      ) : null}
    </AuthVectorContainerWrapper>
  )
}
