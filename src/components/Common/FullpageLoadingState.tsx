import { Loader } from "@components/Loader"

const FullpageLoadingState = () => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-[#00000080] items-center justify-center flex z-[1000000]">
      <Loader />
    </div>
  )
}

export default FullpageLoadingState
