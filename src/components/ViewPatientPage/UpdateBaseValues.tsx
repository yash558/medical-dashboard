import {
  CurvedLinesIcon,
  MinusCircleIcon,
  PenIcon,
  SettingIcon,
  DownArrowIcon,
  CheckCircleIcon,
} from "@assets/icons"
import { AddCircleIcon } from "@assets/icons/AddCircle"
import ArrowRightInsideCircle from "@assets/icons/arrowRightInsideCircle"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "@components/Button"
import useExercise from "@hooks/useExercise"
import { useSearchParams } from "react-router-dom"
import { EditOpacity } from "./EditOpacity"
import usePatient from "@hooks/usePatient"
export const UpdateBaseValues = () => {
  const { patient } = useSelector((state) => state.patient)
  const [showEditOpacity, setShowEditOpacity] = useState(false)
  const { handleUpdatePatientOtl } = useExercise()
  const { handleGetSinglePatient } = usePatient()
  const [isEditable, setIsEditable] = useState(false)
  const [searchParams] = useSearchParams()
  const patientId = searchParams.get("_id")
  const isMobile = window.innerWidth < 824
  const patientData = patient?.data[0]
  const [baseValues, setBaseValues] = useState(() => {
    if (patientData) {
      return {
        level: patientData.exercises.level,
        time: patientData.exercises.time,
        opacity1: Math.floor(
          parseFloat(patientData?.exercises?.opacity1?.$numberDecimal) * 100
        ),
        opacity2: Math.floor(
          parseFloat(patientData?.exercises?.opacity2?.$numberDecimal) * 100
        ),
      }
    }
    return null
  })

  const editButtonClickHandler = () => {
    setIsEditable(true)
  }
  const timePlusButtonClickHandler = () => {
    if (isEditable) {
      setBaseValues((previous) => {
        const time = Math.min(10, previous.time + 1)
        return { ...previous, time }
      })
    }
  }

  const timeMinusButtonClickHandler = () => {
    if (isEditable) {
      setBaseValues((previous) => {
        const time = Math.max(1, previous.time - 1)
        return { ...previous, time }
      })
    }
  }

  const levelPlusButtonClickHandler = () => {
    if (isEditable) {
      setBaseValues((previous) => {
        const level = Math.min(6, previous.level + 1)
        return { ...previous, level }
      })
    }
  }

  const levelMinusButtonClickHandler = () => {
    if (isEditable) {
      setBaseValues((previous) => {
        const level = Math.max(1, previous.level - 1)
        return { ...previous, level }
      })
    }
  }
  const closeEditOpacity = () => {
    setShowEditOpacity(false)
  }

  const updateOpacities = (opacities) => {
    setBaseValues((previous) => {
      return { ...previous, ...opacities }
    })
  }
  const UpdatePatientOtlSuccess = () => {
    handleGetSinglePatient({ _id: patientId })
    setIsEditable(false)
  }

  return (
    <>
      {showEditOpacity && isEditable ? (
        <EditOpacity
          onClose={closeEditOpacity}
          onApply={updateOpacities}
          initialOpacities={baseValues}
        />
      ) : null}
      <Accordion
        className="p-4 py-8 md:p-4 !bg-[--primary-blue-light] !rounded-2xl gap-4 flex flex-col relative mx-4 md:mx-0 !shadow-none min-h-[124px] before:hidden "
        disableGutters
        disableSpacing
        defaultExpanded={!isMobile}
        disabled={!isMobile}
      >
        <AccordionSummary
          expandIcon={
            <DownArrowIcon
              className="h-6 w-6 text-[#292D32] md:hidden"
              disableGutters
              disableSpacing
            />
          }
          className="!p-0 !min-h-6 !m-0 border-none z-[1]"
          disableSpacing
          disableGutters
          sx={{
            "&.Mui-disabled": {
              opacity: "1",
            },
          }}
        >
          <div className="flex gap-2">
            <SettingIcon className="text-[--primary-blue]" />

            <div className="flex flex-col gap-1 max-w-[9.5rem] md:max-w-none">
              <h2 className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                UPDATE BASE VALUES
              </h2>
              <div className="text-xs text-[--text-light-gray]">
                View and edit exercises prescribed to{" "}
                <span className="font-bold">Dan Levy</span>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className="!p-0 !m-0 !text-[var--(--text-light-gray)]"
          disableSpacing
        >
          <div className="px-6 py-4 bg-[--pure-white] w-max max-w-full rounded-2xl">
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 flex-col w-max">
                <div className="text-sm text-[--text-light-gray]">Time</div>
                <div className="h-[44px] flex items-center w-[8.31rem] justify-between px-2 rounded-lg border border-[--border-blue-light] shadow-[0_1px_2px_0_#1018280D]">
                  <button
                    onClick={timeMinusButtonClickHandler}
                    className={`p-1 rounded-lg ${isEditable ? "bg-[--primary-blue-light]" : "bg-[--quinary-gray-light]"}`}
                  >
                    <MinusCircleIcon
                      className={`${isEditable ? "text-[--primary-blue]" : "text-[#BCBEC0]"}`}
                    />
                  </button>
                  <div className="font-bold text-sm text-[--text-black-dark]">
                    {baseValues?.time} mins
                  </div>
                  <button
                    onClick={timePlusButtonClickHandler}
                    className={`p-1 rounded-lg ${isEditable ? "bg-[--primary-blue-light]" : "bg-[--quinary-gray-light]"}`}
                  >
                    <AddCircleIcon
                      className={`${isEditable ? "text-[--primary-blue]" : "text-[#BCBEC0]"}`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 flex-col w-max">
                <div className="text-sm text-[--text-light-gray]">Level</div>
                <div className="h-[44px] flex items-center w-[5.25rem] justify-between px-2 rounded-lg border border-[--border-blue-light] shadow-[0_1px_2px_0_#1018280D]">
                  <button
                    onClick={levelMinusButtonClickHandler}
                    className={`p-1 rounded-lg ${isEditable ? "bg-[--primary-blue-light]" : "bg-[--quinary-gray-light]"}`}
                  >
                    <MinusCircleIcon
                      className={`${isEditable ? "text-[--primary-blue]" : "text-[#BCBEC0]"}`}
                    />
                  </button>
                  <div className="font-bold text-sm text-[--text-black-dark]">
                    {baseValues?.level}
                  </div>
                  <button
                    onClick={levelPlusButtonClickHandler}
                    className={`p-1 rounded-lg ${isEditable ? "bg-[--primary-blue-light]" : "bg-[--quinary-gray-light]"}`}
                  >
                    <AddCircleIcon
                      className={`${isEditable ? "text-[--primary-blue]" : "text-[#BCBEC0]"}`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 flex-col w-max">
                <div className="text-sm text-[--text-light-gray]">Opacity</div>
                <div className="h-[44px] flex items-center gap-4 px-2 rounded-lg border border-[--border-blue-light] shadow-[0_1px_2px_0_#1018280D]">
                  <div className="flex gap-1 items-center">
                    <div>Red</div>
                    <div className="font-bold text-base tracking-widest text-[--text-black-dark]">
                      {baseValues?.opacity1}%
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div>Blue</div>
                    <div className="font-bold text-base tracking-widest text-[--text-black-dark]">
                      {baseValues?.opacity2}%
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (isEditable) {
                        setShowEditOpacity(true)
                      }
                    }}
                    className={`p-1 rounded-lg ${isEditable ? "bg-[--primary-blue-light]" : "bg-[--quinary-gray-light]"}`}
                  >
                    <ArrowRightInsideCircle
                      className={`h-[1rem] w-[1rem] ${isEditable ? "text-[--primary-blue]" : "text-[#BCBEC0]"}`}
                    />
                  </button>
                </div>
              </div>

              {!isEditable ? (
                <Button
                  onClick={editButtonClickHandler}
                  variant="transparent"
                  className="flex gap-1 items-center w-[5.2rem] justify-center !p-2 border border-[--primary-blue] rounded-lg h-[44px] mt-auto text-xs font-bold text-[--primary-blue] tracking-widest"
                >
                  EDIT
                  <PenIcon className="text-[#005BB2]" />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleUpdatePatientOtl(
                      {
                        ...baseValues,
                        opacity1: baseValues?.opacity1 / 100,
                        opacity2: baseValues?.opacity2 / 100,
                        patientId,
                      },
                      UpdatePatientOtlSuccess
                    )
                  }}
                  variant="primary"
                  className="flex gap-1 items-center justify-center !p-2 border border-[--primary-blue] rounded-lg h-[44px] mt-auto text-xs font-bold text-[--primary-blue] tracking-widest"
                >
                  APPLY
                  <CheckCircleIcon
                    className="text-[--pure-white] h-[1rem] w-[1rem]"
                    strokeWidth="9"
                  />
                </Button>
              )}
            </div>
          </div>
          <CurvedLinesIcon className="absolute right-0 bottom-0 h-[4rem] w-max 2xl:h-max" />
        </AccordionDetails>
      </Accordion>
    </>
  )
}
