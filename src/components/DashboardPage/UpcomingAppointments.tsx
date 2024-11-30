import ArrowInCircleIcon from "@assets/icons/arrowInCircle"
import MeetingInfoIcon from "@assets/icons/meetingInfo"
import PlusInCircleIcon from "@assets/icons/plustInCircle"
import { useSelector } from "react-redux"
import formatDateFromISOString from "src/utils/formatDate"
import { Link } from "react-router-dom"
const UpcomingAppointments = () => {
  const { getUpcomingBookingResponse } = useSelector((state) => {
    return state.booking
  })

  return (
    <div className="p-4 flex flex-col grow gap-4 rounded-3xl bg-[--pure-white] overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <MeetingInfoIcon stroke="#005BB2" />
          <div className="font-bold text-xs text-[--text-light-gray] tracking-widest">
            NEXT UPCOMING 7 DAYS APPOINTMENT
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={"/manage-patient-vision"}>
            <ArrowInCircleIcon />
          </Link>
          <Link to={"/manage-patient-vision/add-new-patient"}>
            <PlusInCircleIcon />
          </Link>
        </div>
      </div>
      <div className="flex gap-1 max-w-[45rem] overflow-x-scroll no-scrollbar">
        <div className="bg-[--primary-blue] rounded-2xl flex flex-col gap-2 px-3 py-4 h-[7.1rem] justify-end min-w-[6.7rem] max-h-[7.125rem] w-[6.8rem]">
          <div className="text-3xl 3xl:text-4xl text-[--pure-white] text-left">
            {getUpcomingBookingResponse?.total_record || "0"}
          </div>
          <div className="font-medium text-xs text-[--pure-white] text-left">
            Total appointments
          </div>
        </div>

        {getUpcomingBookingResponse?.upcomingBookings?.map(({ count, _id }) => {
          return (
            <div className="rounded-2xl flex flex-col gap-2 px-2 py-4 h-[7.1rem] justify-end bg-[--primary-blue-light] min-w-[4.8rem] max-h-[7.125rem]">
              <div className="text-2xl text-[--primary-blue] text-center">
                {count}
              </div>
              <div className="font-medium text-[0.625rem] tracking-widest text-[--text-light-gray] text-center">
                {formatDateFromISOString(_id).day}{" "}
                {formatDateFromISOString(_id).dayAsName.toUpperCase()}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UpcomingAppointments
