// components
import { FormContainerWrapper } from "./FormContainerWrapper"
// assets
import logo from "@assets/Common/logo-black.png"

export const FormContainer = ({ children }) => (
  <FormContainerWrapper>
    <div className="flex items-start md:items-center justify-center flex-grow h-full w-full">
      <div className="flex flex-col gap-8 2xl-tall:gap-4 w-full max-w-96 md:max-w-[21.3rem] min-h-[38rem] 2xl-tall:min-h-[41rem] 3xl-tall:min-h-[43.5rem]">
        <div className="flex items-center md:justify-center h-full w-full">
          <img src={logo} height="auto" width={110} alt="logo" />
        </div>
        {children}
      </div>
    </div>
  </FormContainerWrapper>
)
