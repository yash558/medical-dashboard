import DashboardDoctorBackgroundIcon from "@assets/icons/dashboardDoctorBackground"
import DashboardDoctorMobileBackground from "@assets/icons/dashboardDoctorMobileBackground"
import DashboardFemaleDoctorIcon from "@assets/icons/DashboardFemaleDoctor"
import DashboardFemaleDoctorMobileIcon from "@assets/icons/DashboardFemaleDoctorMobile"
import { useSelector } from "react-redux"
const DoctorIntro: React.FC = () => {
  const { ownDetails: doctorProfileDetails } = useSelector((state: any) => {
    return state.profile
  })

  const { firstName, gender } = doctorProfileDetails?.details || {}

  return (
    <div className="md:min-h-[16.4rem] bg-[--primary-blue-light] border border-[--bg-blue-light] md:border-0 md:bg-[--pure-white] relative rounded-3xl px-6 py-4 md:px-8 md:py-10 max-h-[16.3rem] grow overflow-hidden">
      <div className="hidden md:block absolute bottom-0 right-0">
        {gender === "male" ? (
          <DashboardDoctorBackgroundIcon />
        ) : (
          <DashboardFemaleDoctorIcon />
        )}
      </div>
      <div className="md:hidden absolute top-0 right-0">
        {gender === "male" ? (
          <DashboardDoctorMobileBackground />
        ) : (
          <DashboardFemaleDoctorMobileIcon />
        )}
      </div>
      <div className="flex justify-center flex-col gap-1 md:gap-2 z-20 relative h-full">
        <div className="text-[--text-light-gray] text-sm md:text-xl font-medium md:font-semibold">
          Good day,
        </div>
        <div className="text-2xl md:text-5xl text-[--primary-blue] font-[poppins] font-light">
          Dr. {firstName}
        </div>
        <div className="text-xs md:font-bold md:mt-2">
          Have a nice Day at work
        </div>
      </div>
    </div>
  )
}

export default DoctorIntro
