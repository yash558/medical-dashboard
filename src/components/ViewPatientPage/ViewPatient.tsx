import ArrowLeftIcon from "../../assets/icons/arrowLeft"
import ArrowSquareLeftIcon from "../../assets/icons/arrowSquareLeft"
import EyeIcon from "../../assets/icons/Eye"
import { ChartIcon, PatientIcon } from "../../assets/icons"
import { NotesTwoIcon } from "../../assets/icons/NotesTwo"
import Notes from "./Notes"
import Patient from "./Patient"
import Prescribe from "./Prescribe"
import { useEffect, useState } from "react"
import NavigationSection from "./NavigationItem"
import { useSearchParams } from "react-router-dom"
import usePatient from "@hooks/usePatient"
import { Loader } from "@components/Loader"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Performance from "./Performance"
const ViewPatient = () => {
  const [currentSection, setCurrentSection] = useState("0")
  const { handleGetSinglePatient } = usePatient()
  const { isGetSinglePatientLoading } = useSelector((state) => {
    return state.patient
  })
  const [searchParams] = useSearchParams()
  const patientId = searchParams.get("_id")
  useEffect(() => {
    handleGetSinglePatient({ _id: patientId })
  }, [handleGetSinglePatient, patientId])

  return (
    <div className="flex flex-col">
      <Link to="/manage-patient-vision" className="hidden md:flex gap-2 mb-8">
        <ArrowLeftIcon />
        <span className="text-sm text-[--primary-blue] font-bold">BACK</span>
      </Link>
      <Link to="/manage-patient-vision" className="md:hidden mb-5 mx-4 md:mx-0">
        <ArrowSquareLeftIcon />
      </Link>
      <div className="text-sm md:text-3xl font-bold text-[--primary-blue] md:text-[--quaternary-black] md:font-normal mx-4 md:mx-0 mb-6 md:mb-8 ">
        View Patient
      </div>
      <div className="flex justify-center md:justify-start gap-1 bg-[--primary-blue-light] md:bg-[transparent] rounded-t-3xl px-3 pt-3 md:p-0 mb-4 md:m-0 md:ml-6">
        <NavigationSection
          name="Patient"
          Icon={PatientIcon}
          sectionId="0"
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <NavigationSection
          name="Prescribe"
          Icon={EyeIcon}
          sectionId="1"
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <NavigationSection
          name="Performance"
          Icon={ChartIcon}
          sectionId="2"
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <NavigationSection
          name="Notes"
          Icon={NotesTwoIcon}
          sectionId="3"
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      {currentSection === "0" ? <Patient /> : null}
      {currentSection === "1" ? <Prescribe /> : null}
      {currentSection === "2" ? <Performance /> : null}
      {currentSection === "3" ? <Notes /> : null}

      {isGetSinglePatientLoading ? (
        <div className="fixed right-0 left-0 top-0 bottom-0 bg-[#25323E3D] flex items-center justify-center z-[1000000]">
          <Loader />
        </div>
      ) : null}
    </div>
  )
}

export default ViewPatient
