// components
import { FormContainer } from "@components/Auth"
import { AuthVectorContainer } from "@components/Auth/AuthVectorContainer/AuthVectorContainer"

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-svh w-full overflow-hidden overflow-y-auto">
    <AuthVectorContainer />
    <FormContainer>{children}</FormContainer>
  </div>
)

export default AuthLayout
