// assets
import SignInVec from "@assets/AuthPage/login.png"

export const LoginFormImage = () => (
  <span
    className="flex-grow bg-no-repeat bg-center bg-contain [@media(min-height:800px)]:h-72"
    style={{
      backgroundImage: `url(${SignInVec})`,
    }}
  />
)
