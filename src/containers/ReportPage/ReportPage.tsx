import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import ArrowLeftIcon from "@assets/icons/arrowLeft"
import CodeIcon from "@assets/icons/CodeIcon 2"
import styles from "../ManageAppointmentPage/ManageAppointmentPage.module.css"
import ShapesIcon from "@assets/icons/ShapesIcon"
import ArrowSquareLeftIcon from "@assets/icons/arrowSquareLeft"
import GoBack from "@components/Common/GoBack"
import ReportConcernForm from "@components/reportConcernForm/ReportConcernForm"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
const ReportPage: React.FC = () => {
  const cardArray = [
    {
      key: "technical",
      icon: CodeIcon,
      title: "Technical Issues",
      description: `Encountering any technical issues while using the eye exercise website, such as slow loading times, unresponsive buttons or links, error messages appearing unexpectedly. By reporting technical issues, users can help the development team identify and resolve underlying problems.`,
    },
    {
      key: "visual",
      icon: ShapesIcon,
      title: "Visual Issues",
      description: `Issues such as blurry or distorted images, difficult to read due to font size or color contrast issues, or elements of the website that are visually overwhelming or distracting. Addressing these visual problems is essential to ensure that users can engage with the exercises comfortably.`,
    },
    {
      key: "usability",
      icon: CodeIcon,
      title: "Usability Issue",
      description: `Usability concerns relate to the overall ease of use and navigability of the eye exercise website. If experience difficulties in finding their way around the site, or understanding how to use specific features. User by reporting experience and encouraging users to engage with the exercises regularly.`,
    },
    {
      key: "Other",
      icon: CodeIcon,
      title: "Other",
      description: `The "Other" category provides users with an opportunity to report any issues or concerns not covered by the predefined categories. This could include general feedback or suggestions for improvement, requests for new features or functionalities, or any other issues that users encounter while using the website.`,
    },
  ]
  return (
    <NavigationsPage defaultBackgroundClassName={styles.defaultBackgroundClassName}>
      <div className=" grow flex overflow-hidden">
        <PageWrapper className={styles.manageAppointmentPage}>
          <div className="flex flex-col lg:gap-6 3xl:gap-10 overflow-x-hidden overflow-y-scroll no-scrollbar flex-grow w-full gap-5 3xl-tall:gap-5">

            <div className="flex flex-col flex-shrink-0 md:items-center gap-5 md:gap-2 2xl:gap-3 3xl:gap-5">
              <GoBack className="hidden md:flex items-center gap-3 w-full ">
                <ArrowLeftIcon />

                <p className="text-sm font-bold text-[var(--text-theme)]">
                  Back
                </p>
              </GoBack>
              <button className="block md:hidden">
                <ArrowSquareLeftIcon />
              </button>
            </div>

            <h1 className="text-4xl md:flex hidden font-light">Issues to Report</h1>
            <div className="flex xl:hidden flex-col gap-4">
              <h5 className="text-2xl text-[var(--bg-theme-primary)]">
                Issues to Report
              </h5>
              <div className="flex items-center justify-center w-full p-4">
                <div className="flex gap-4 lg:gap-8 rounded-2xl bg-[var(--bg-theme-secondary)] p-6 max-w-sm">
                  <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 1.5 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                  >
                    {cardArray.map((card) => (
                      <SwiperSlide
                        key={card.key}
                        style={{ width: "10%" }}
                        className="flex flex-col  justify-between rounded-2xl p-6 bg-white shadow-md border border-[var(--border-blue-light)]"
                      >
                        {/* Icon Section */}
                        <div className="flex items-center justify-end">
                          <card.icon className="h-10 w-10 text-[var(--text-light-gray)]" />
                        </div>

                        {/* Title and Description Section */}
                        <div className="flex flex-col gap-3">
                          <h3 className="text-xl font-semibold text-[var(--text-dark)]">{card.title}</h3>
                          <span className="text-sm text-[var(--text-gray)]">{card.description}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            <div
                className={`flex h-max justify-center xl:justify-between gap-8 w-full flex-grow`}
              >
                <div className="flex items-center justify-center min-w-full sm:min-w-[420px]">
                  <ReportConcernForm />
                </div>
                <div className="hidden xl:flex flex-col  gap-4  w-full">
                  <div className="grid grid-cols-2 grid-rows-2 3xl:grid-rows-report-row gap-4  2xl-tall:gap-8  flex-grow">
                    {cardArray.map((card, index) => (
                      <div
                        key={card.key}
                        className={`flex flex-col max-w-7xl justify-between col-span-1 row-span-1 rounded-2xl p-4 2xl-tall:p-8 ${index === 0 ? "text-white bg-[var(--bg-theme-primary)]" : "bg-white border border-[var(--border-blue-light)]"}`}
                      >
                        <div className="flex items-center justify-end">
                          <card.icon
                            className={`size-24 text-[var(--text-light-gray)]  ${index === 0 ? "text-white" : ""}`}
                          />
                        </div>
                        <div className="flex flex-col gap-2 2xl-tall:gap-5">
                          <h3 className="text-2xl">{card.title}</h3>
                          <span className="text-xs">{card.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </PageWrapper>
      </div>
    </NavigationsPage>
  )
}

export default ReportPage
