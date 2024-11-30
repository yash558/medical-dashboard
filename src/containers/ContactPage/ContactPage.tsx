import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import styles from "../ManageAppointmentPage/ManageAppointmentPage.module.css"
import ContactPageIcon from "@assets/icons/contactPage"
import ArrowLeftIcon from "@assets/icons/arrowLeft"
import ArrowSquareLeftIcon from "@assets/icons/arrowSquareLeft"
import GoBack from "@components/Common/GoBack"
import ContactInfo from "@components/ContactInfo/ContactInfo"
import { useForm } from "react-hook-form"
const ContactPage: React.FC = () => {
  const { control, formState: { errors } } = useForm();
  return (
    <NavigationsPage defaultBackgroundClassName={styles.contactPageBackground}>
      <div className=" grow flex">
        <PageWrapper className={styles.manageAppointmentPage}>
          <div className="flex flex-col lg:gap-6 3xl:gap-10 overflow-hidden flex-grow w-full gap-5 3xl-tall:gap-5 overflow-y-scroll no-scrollbar">
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
            <h1 className="text-3xl font-normal text-[#101828] mb-4">
              Contact
            </h1>
            <div className="flex flex-col flex-grow h-max">
              <div className="flex justify-center xl:justify-between gap-8 h-full w-full flex-grow undefined">
                <div className="md:w-2/3">
                  <ContactInfo control={control} errors={errors} />
                </div>
                <div className="hidden xl:flex flex-col items-center justify-center gap-8 rounded-2xl bg-[var(--bg-theme-primary)] text-white  px-12 w-full ">
                  <ContactPageIcon className="w-[400px] xl-tall::w-[360px] 2xl-tall:w-[400px] 3xl-tall:w-[460px]" />
                  <span className="text-2xl text-center 2xl:whitespace-pre-line">
                    Join the vision revolution: Expert-endorsed eye exercises to
                    enhance your eyesight Get started today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
    </NavigationsPage>
  )
}

export default ContactPage
