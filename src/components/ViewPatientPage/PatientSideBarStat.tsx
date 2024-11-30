import { TimerIcon } from "@assets/icons"
const PatientSideBarStat = ({ title, value }) => {
  return (
    <div className="p-4 rounded-3xl bg-[--primary-blue-light] flex flex-col gap-4">
      <TimerIcon className="text-[--primary-blue] h-[1.5rem] w-[1.5rem]" />
      <div className="text-xs text-[--text-ligh-gray] tracking-widest font-bold">
        {title}
      </div>
      <div className="text-[2.2rem] text-[--text-light-gray] mt-auto">
        {value}
      </div>
    </div>
  )
}

export default PatientSideBarStat
