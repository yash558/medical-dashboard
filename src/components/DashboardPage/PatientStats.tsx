import ArrowInCircleIcon from "@assets/icons/arrowInCircle"
import { PatientIcon } from "@assets/icons"
import PlusInCircleIcon from "@assets/icons/plustInCircle"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const PatientStats: React.FC = () => {
  const { getPatientCountResponse } = useSelector((state: any) => {
    return state.patient
  })
  const patientCountData = getPatientCountResponse

  return (
    <div className="p-4 flex flex-col gap-4 rounded-3xl bg-[--pure-white] border border-[--primary-blue-light] md:border-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <PatientIcon className="text-[--primary-blue]" />
          <div className="font-bold text-xs text-[--text-light-gray] tracking-widest">
            PATIENT
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={"/manage-patient-vision"}>
            <ArrowInCircleIcon style={{ width: "100%", height: "100%" }} />
          </Link>
          <Link to={"/manage-patient-vision/add-new-patient"}>
            <PlusInCircleIcon />
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="grow rounded-2xl flex flex-col gap-2 p-4 bg-[--primary-blue-light] min-w-[8.5rem] min-h-[7.1rem]">
          <div className="bg-[green] rounded-full h-3 w-3 ml-auto"></div>
          <div className="text-3xl 3xl:text-4xl text-[--primary-blue]">
            {patientCountData?.activeCount || 0}
          </div>
          <div className="text-xs font-bold">Active patient</div>
        </div>
        <div className="grow rounded-2xl flex flex-col gap-2 p-4 bg-[--primary-blue-light] min-w-[8.5rem] min-h-[7.1rem]">
          <div className="bg-[#BCBEC0] rounded-full h-3 w-3 ml-auto"></div>
          <div className="text-3xl 3xl:text-4xl text-[--primary-blue]">
            {patientCountData?.inactiveCount || 0}
          </div>
          <div className="text-xs font-bold">Inactive patient</div>
        </div>
      </div>
    </div>
  )
}

export default PatientStats
