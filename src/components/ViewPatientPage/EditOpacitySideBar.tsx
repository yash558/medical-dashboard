import { MinusCircleIcon } from "@assets/icons"
import { AddCircleIcon } from "@assets/icons/AddCircle"
import { Button } from "@components/Button"
import styles from "./EditOpacity.module.css"
import { useState } from "react"
import { cn } from "src/utils/common.helper"

const EditOpacitySideBar = ({
  circleClassName,
  color,
  opacities,
  name,
  setOpacities,
  onApply,
  initialOpacities,
  rootClassName,
}) => {
  const [isApplyButtonDisabled, setIsApplyButtonDisabled] = useState(true)
  const handleIncrementOpacity = () => {
    setOpacities((previous) => {
      return { ...previous, [name]: Math.min(previous[name] + 1, 100) }
    })
    setIsApplyButtonDisabled(false)
  }

  const handleDecrementOpacity = () => {
    setOpacities((previous) => {
      return { ...previous, [name]: Math.max(previous[name] - 1, 0) }
    })
    setIsApplyButtonDisabled(false)
  }

  const handleOpacityInputChange = (event) => {
    const opacity = parseInt(event.currentTarget.value)
    setOpacities((previous) => {
      return { ...previous, [name]: opacity }
    })
    setIsApplyButtonDisabled(false)
  }
  return (
    <div
      className={cn(
        "px-3 py-4 md:px-5 md:py-7 bg-[--pure-white] rounded-r-2xl flex flex-col justify-center  items-center gap-7",
        rootClassName
      )}
    >
      <div className="flex gap-1">
        <div className="flex flex-col w-6 items-center relative">
          <input
            orient="vertical"
            onChange={handleOpacityInputChange}
            type="range"
            min={0}
            max={100}
            step={5}
            className={
              "absolute right-0 left-0 top-0 bottom-0 bg-[transparent] z-[100] cursor-pointer" +
              " " +
              styles.verticalSlider
            }
          ></input>

          <div
            style={{ top: `${100 - opacities[name]}%` }}
            className={cn(
              "w-4 h-4 md:w-5 md:h-5 3xl:w-6 3xl:h-6 rounded-full border-[3px] border-[--pure-white] absolute bg-[red] z-50 shadow-[0px_0px_3px_0px_#0000001A]",
              circleClassName
            )}
          ></div>
          {new Array(21).fill(5).map((current, index, array) => {
            return (
              <div
                key={index}
                style={{ opacity: (20 - index) * 0.05 }}
                className={`w-2 h-2 md:w-4 md:h-4 3xl:w-[12px] 3xl:h-[25px] bg-[${color}] ${index === 0 || index === array.length - 1 ? "rounded-t-lg" : ""}`}
              ></div>
            )
          })}
        </div>

        <div className="hidden md:flex md:flex-col gap-1 md:gap-3 3xl:justify-between">
          {new Array(21).fill(5).map((current, index) => {
            return (
              <div
                key={index}
                className={`w-2 h-1 3xl:w-[16px] 3xl:h-[4px] bg-[#BCBEC0] rounded-lg`}
              ></div>
            )
          })}
        </div>

        <div className="justify-between hidden md:flex md:flex-col">
          {new Array(21).fill(5).map((current, index) => {
            const value = (20 - index) * 5
            return (
              <div
                key={index}
                className={`w-[16px] text-xs 3xl:text-sm transform -rotate-90 text-[#BCBEC0] flex items-center ${value % 5 === 0 && value % 10 !== 0 ? "invisible" : ""}`}
              >
                {(20 - index) * 5}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-3 w-full items-center justify-between md:px-2 rounded-lg">
        <button
          onClick={handleIncrementOpacity}
          className="p-1 rounded-lg bg-[--primary-blue-light]"
        >
          <AddCircleIcon className="text-[--primary-blue]" />
        </button>

        <div className="font-bold text-sm text-[--primary-blue] !h-8 md:h-11 w-full flex justify-center items-center px-2 rounded-lg border border-[--primary-blue]">
          {opacities[name]}
        </div>

        <button
          onClick={handleDecrementOpacity}
          className="p-1 rounded-lg bg-[--primary-blue-light]"
        >
          <MinusCircleIcon className="text-[--primary-blue]" />
        </button>

        <Button
          disabled={isApplyButtonDisabled}
          onClick={() => {
            setIsApplyButtonDisabled(true)
            onApply({ ...initialOpacities, [name]: opacities[name] })
          }}
          variant="primary"
          className={`flex gap-1 items-center justify-center !p-2 border border-[--primary-blue] rounded-lg !h-8 md:!h-11 mt-auto !text-[0.62rem] md:!text-xs font-bold text-[--primary-blue] tracking-widest ${isApplyButtonDisabled ? "!bg-[#BCBEC0] border-[transparent]" : ""}`}
        >
          APPLY
        </Button>
      </div>
    </div>
  )
}

export default EditOpacitySideBar
