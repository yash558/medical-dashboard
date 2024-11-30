import { Loader } from "@components/Loader"
import { cn } from "src/utils/common.helper"
const ApiLoader: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "fixed right-0 left-0 top-0 bottom-0 bg-[#25323E3D] flex items-center justify-center z-[1000000]",
        className
      )}
    >
      <Loader />
    </div>
  )
}

export default ApiLoader
