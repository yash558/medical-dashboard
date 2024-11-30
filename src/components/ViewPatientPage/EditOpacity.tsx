import CloseSquareIcon from "@assets/icons/closeSquare"
import { useState } from "react"
import EditOpacitySideBar from "./EditOpacitySideBar"
export const EditOpacity = ({ onClose, onApply, initialOpacities }) => {
  const [opacities, setOpacities] = useState({
    ...initialOpacities,
  })

  return (
    <div className="fixed right-0 left-0 bottom-0 top-0 bg-[black] z-50 flex items-center justify-between">
      <CloseSquareIcon
        onClick={onClose}
        className="text-[--pure-white] absolute left-5 top-5 cursor-pointer"
      />

      <EditOpacitySideBar
        name="opacity1"
        setOpacities={setOpacities}
        circleClassName="bg-[#E40101CC]"
        color="red"
        opacities={opacities}
        isEditable={true}
        onApply={onApply}
        initialOpacities={initialOpacities}
      />

      <div className="flex gap-3 md:gap-6">
        <div
          style={{ opacity: `${opacities.opacity1 / 100}` }}
          className="h-[6.1rem] w-[6.1rem] md:h-[14.25rem] md:w-[14.25rem] rounded-full bg-[red]"
        ></div>
        <div
          style={{ opacity: `${opacities.opacity2 / 100}` }}
          className="h-[6.1rem] w-[6.1rem]  md:h-[14.25rem] md:w-[14.25rem] rounded-full bg-[blue]"
        ></div>
      </div>

      <EditOpacitySideBar
        name="opacity2"
        setOpacities={setOpacities}
        circleClassName="bg-[#0029FFCC]"
        color="blue"
        opacities={opacities}
        isEditable={true}
        onApply={onApply}
        initialOpacities={initialOpacities}
        rootClassName="rounded-none rounded-l-2xl"
      />
    </div>
  )
}
