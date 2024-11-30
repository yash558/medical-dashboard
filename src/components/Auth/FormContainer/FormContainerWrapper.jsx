import { FormFooter } from "../Common"
import { useSearchParams } from "react-router-dom"

export const FormContainerWrapper = ({ children }) => {
  const [searchParams] = useSearchParams()
  const onboarding = searchParams.get("onboarding")

  return (
    <div
      className={`${onboarding === "true" ? "hidden" : "flex"} md:flex flex-col justify-between gap-5 xl-tall:gap-6 2xl-tall:gap-8 w-full md:w-3/5 lg:w-1/2 xl:w-2/5 px-9 md:px-10 lg:px-12 xl:px-14 2xl:px-16 3xl:px-20 py-3 2xl-tall:py-5`}
    >
      {children}
      <FormFooter />
    </div>
  )
}
