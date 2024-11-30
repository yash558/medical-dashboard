import { EmptyAppointmentsIcon } from "@assets/icons"
import PlusIcon from "@assets/icons/plus"
import { Link } from "react-router-dom"
const AppointmentsEmpty = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center grow mt-5">
      <h2 className="font-semibold text-xl text-[#100F14]">
        Your schedule seems free
      </h2>
      <p className="text-xs text-[#475467] max-w-52 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tquis nostrud exercitation
      </p>
      <Link
        to="/manage-appointment/schedule-appointment"
        className="flex px-4 py-2 gap-2 rounded-lg items-center bg-[--primary-blue] text-[--pure-white] text-sm"
      >
        <PlusIcon stroke="#FFFFFF" />
        SCHEDULE
        <span className="md:inline">APPOINTMENT</span>
      </Link>
      <EmptyAppointmentsIcon />
    </div>
  )
}

export default AppointmentsEmpty
