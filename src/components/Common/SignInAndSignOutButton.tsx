import useAuth from "@hooks/useAuth"
import { useSelector } from "react-redux"
import { Button } from "@components/Button"
const SignInAndSignOutButton = ({ signInClassName, signOutClassName }) => {
  const { handleLogoutSession } = useAuth()
  const { isLogoutLoading } = useSelector((state) => {
    return state.auth
  })
  const { ownDetails } = useSelector((state) => state.profile)
  return (
    <>
      {ownDetails ? (
        <Button
          onClick={handleLogoutSession}
          loading={isLogoutLoading}
          className={signOutClassName}
        >
          SIGN OUT
        </Button>
      ) : (
        <a href="/sign-in?onboarding=true" className={signInClassName}>
          SIGN IN
        </a>
      )}
    </>
  )
}

export default SignInAndSignOutButton
