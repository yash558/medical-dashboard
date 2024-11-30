import ArrowInCircleIcon from "@assets/icons/arrowInCircle"
import EyeGlassesIcon from "@assets/icons/eyeGlasses"
import OtherApplicationsIcon from "@assets/icons/otherApplications"
import { Link } from "react-router-dom"
const OtherApplications: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-4 rounded-3xl bg-[--pure-white] overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <OtherApplicationsIcon />
          <div className="font-bold text-xs text-[--text-light-gray] tracking-widest">
            OTHER APPLICATIONS
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={"/other-apps"}>
            <ArrowInCircleIcon style={{ width: "100%", height: "100%" }}  />
          </Link>
        </div>
      </div>
      <div className="flex gap-2 max-w-[45rem] overflow-x-scroll no-scrollbar">
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-2 px-6 py-4 min-w-[10.9rem] h-[9.5rem] justify-between bg-[--primary-blue-light]">
          <div className="w-12 h-12 rounded-full bg-[--pure-white] flex items-center justify-center">
            <EyeGlassesIcon />
          </div>
          <div className="font-semibold text-base text-[--primary-blue] text-center">
            EMR System App
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherApplications
