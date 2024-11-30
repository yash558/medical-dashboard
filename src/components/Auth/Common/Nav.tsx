import { useNavigate } from "react-router"
// components
import { ResponsiveText } from "@components/Typography"
// assets
import { LeftArrowIcon } from "@assets/icons/LeftArrow"
import { LeftArrowWithBorderIcon } from "@assets/icons/LeftArrowWithBorder"

interface FormNavProps {
  title: string
  subHeading?: string
  stepTitle?: string
  totalSteps: number
  formSteps: number
  updateFormSteps: (newStep: number) => void
}

export const FormNav: React.FC<FormNavProps> = ({
  title,
  subHeading,
  stepTitle,
  totalSteps,
  formSteps,
  updateFormSteps,
}) => {
  const navigate = useNavigate()

  const handleBackRedirection = () => {
    if (formSteps === 1) {
      navigate("/sign-in")
    } else {
      updateFormSteps(formSteps - 1)
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-1 py-2">
        <div className="block sm:hidden">
          <button onClick={handleBackRedirection}>
            <LeftArrowWithBorderIcon className="h-6 w-6 text-[var(--border-primary)]" />
          </button>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <button onClick={handleBackRedirection} className="hidden sm:block">
              <LeftArrowIcon className="h-6 w-6" />
            </button>
            <ResponsiveText size="md" variant="">
              {title}
            </ResponsiveText>
          </div>
          {stepTitle && (
            <div className="flex flex-col items-end gap-0.5 sm:gap-1 text-xs">
              <ResponsiveText
                className="text-[--primary-blue-lt]"
                variant="theme"
                size="xs"
              >
                Step 0{formSteps}/0{totalSteps}
              </ResponsiveText>
              <ResponsiveText variant="secondary" size="xs">
                {stepTitle}
              </ResponsiveText>
            </div>
          )}
        </div>
      </div>
      {/* {subHeading && (
        <ResponsiveText
          variant="theme"
          size="sm"
          className="whitespace-pre-line"
        >
          {subHeading}
        </ResponsiveText>
      )} */}
    </div>
  )
}
