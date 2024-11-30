import { CopyIcon } from "@assets/icons"
import { useEffect, useRef, useState } from "react"
import { cn } from "src/utils/common.helper"
import copyToClipboard from "src/utils/copyToClipboard"
const CopyText = ({
  textToBeCopied,
  tooltipClassName,
  customComponent,
  iconClassName,
  tooltipDuration = 2000,
}) => {
  const timerRef = useRef()
  const [showToolTime, SetShowToolTip] = useState(false)

  const copySuccess = () => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      SetShowToolTip(false)
    }, tooltipDuration)
    SetShowToolTip(true)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])
  return (
    <button className="relative">
      {showToolTime ? (
        <div
          className={cn(
            "px-4 py-2 rounded-lg bg-[--pure-white] text-[--primary-blue] absolute left-2/4 bottom-[150%] -translate-x-1/2 w-max border font-semibold border-[--primary-blue]",
            tooltipClassName
          )}
        >
          copied successfully
        </div>
      ) : null}
      {customComponent ? (
        customComponent
      ) : (
        <CopyIcon
          className={cn("text-[--primary-blue]", iconClassName)}
          onClick={() => {
            copyToClipboard(textToBeCopied, copySuccess)
          }}
        />
      )}
    </button>
  )
}

export default CopyText
