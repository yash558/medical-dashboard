import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import styles from "./DashBoardPage.module.css"
import DoctorIntro from "@components/DashboardPage/DoctorIntro"
import OtherApplications from "@components/DashboardPage/OtherApplications"
import ForAnyAssistance from "@components/DashboardPage/ForAnyAssistance"
import useBooking from "@hooks/useBooking"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ApiLoader from "@components/Common/ApiLoader"
import ChartsComponent from "@components/Common/chartComponent"
import TestsComponent from "@components/DashboardPage/TestComponent"
function DashBoardPage() {
  const { isGetUpcomingBookingLoading, isGetCalendarBookingLoading } =
    useSelector((state: any) => state.booking)
  const { isGetPatientCountLoading } = useSelector((state: any) => state.patient)
  const { handleGetUpcomingBooking, handleGetCalendarBooking } = useBooking()
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)
    return currentDate
  })
  useEffect(() => {
    handleGetUpcomingBooking()
  }, [
    handleGetUpcomingBooking,
    handleGetCalendarBooking,
  ])
  useEffect(() => {
    handleGetCalendarBooking({ date: selectedDate.toISOString() })
  }, [selectedDate, handleGetCalendarBooking])


  return (
    <>
      <NavigationsPage defaultBackgroundClassName={styles.defaultBackgroundClassName}>
        <PageWrapper className={styles.manageAppointmentPage}>
          {/* <div className="text-sm md:text-3xl font-bold text-[--primary-blue] md:text-[--quaternary-black] md:font-normal mb-5 md:mb-8">
            <GoBack className="mb-5 md:hidden">
              <ArrowSquareLeftIcon />
            </GoBack>

         
          </div> */}
          <div className="flex flex-col xl:flex-row gap-2 md:gap-5  md:justify-normal w-full  m-auto md:max-w-none md:m-0">
            <div className="grow xl:overflow-x-hidden h-max gap-2 md:gap-5 flex flex-col">
              <div className="flex gap-2 md:gap-5">
              <DoctorIntro />
              <div className=" flex-col gap-2 md:gap-5 md:max-w-[20.12rem] md:flex hidden">
                <ForAnyAssistance headingText="For any assistance" backgroundColor="var(--bg-theme-secondary)" linkTo="/" />
                <ForAnyAssistance headingText="Use Vision Therapy System" backgroundColor="var(--pure-white)"  linkTo="/" />
               
              </div>
              </div>
              <div className="flex md:max-w-none gap-2 md:gap-5">
                <div className="w-full bg-white rounded-3xl">
               <ChartsComponent />
                </div>
              </div>
              <div className="flex flex-col md:flex-row   gap-2 md:gap-5">
                <div className="flex">
                   <TestsComponent />
                </div>

                <OtherApplications />
              </div>
            </div>
            <div className={`flex flex-col gap-4 md:flex grow max-w-96`}>
              {/* <AppointmentCalendar
                rootClassNameOnCollapsed="md:min-h-[14.8rem]"
                onChange={handleCalendarDateChange}
              /> */}

              {/* <TimeAppointments rootClassName="max-h-[32.5rem]" /> */}
            </div>
       
            <div className="flex-col gap-2 md:gap-5 md:max-w-[20.12rem] md:hidden flex">
                <ForAnyAssistance headingText="For any assistance" backgroundColor="var(--bg-theme-secondary)" linkTo="/" />
                <ForAnyAssistance headingText="Use Vision Therapy System" backgroundColor="var(--pure-white)"  linkTo="/" />
               
              </div>
          </div>
        </PageWrapper>
      </NavigationsPage>

      {isGetPatientCountLoading ||
      isGetCalendarBookingLoading ||
      isGetUpcomingBookingLoading ? (
        <ApiLoader className="md:hidden" />
      ) : null}
    </>
  )
}

export default DashBoardPage
