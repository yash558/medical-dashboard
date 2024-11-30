import CloseSquareIcon from "@assets/icons/closeSquare"
import { CheckBoxCheckedIcon, CheckBoxUncheckedIcon } from "@assets/icons"
import { Checkbox } from "@mui/material"
import { Button } from "@components/Button"
import { useSelector } from "react-redux"
import { useState } from "react"
import useExercise from "@hooks/useExercise"
import { useSearchParams } from "react-router-dom"
import usePatient from "@hooks/usePatient"
import { exercisesList } from "./helper"
const PrescribeExercises = ({ onClose }) => {
  const { patient } = useSelector((state) => {
    return state.patient
  })
  const { handleAddExercise } = useExercise()
  const { handleGetSinglePatient } = usePatient()
  const { isAddExerciseLoading } = useSelector((state) => {
    return state.exercise
  })
  const [selectedExercises, setSelectedExercises] = useState(() => {
    return new Set()
  }, [])
  const [searchParams] = useSearchParams()
  const patientId = searchParams.get("_id")
  const patientData = patient?.data[0]
  const [filters, setFilters] = useState({
    searchInput: "",
    type: "All",
  })
  const getNotPrescribedExercises = () => {
    const notPrescibedExercises = exercisesList.filter((exercise) => {
      let answer = true
      if (patientData.exercises.list.includes(exercise.code)) {
        answer = false
        return answer
      }
      if (filters.searchInput !== "") {
        answer = answer && exercise.code.includes(filters.searchInput)
      }
      if (filters.type !== "All") {
        answer = answer && exercise.type === filters.type
      }
      return answer
    })

    return notPrescibedExercises
  }

  const notPrescribedExercises = getNotPrescribedExercises()
  const addExerciseSuccess = () => {
    handleGetSinglePatient({ _id: patientId })
    onClose()
  }

  const clearSelectedExercises = () => {
    setSelectedExercises(new Set())
  }

  const exerciseCheckBoxToggle = (event) => {
    if (event.target.checked) {
      setSelectedExercises((previous) => {
        const newSet = new Set(previous)
        newSet.add(event.target.value)
        return newSet
      })
    } else {
      setSelectedExercises((previous) => {
        const newSet = new Set(previous)
        newSet.delete(event.target.value)
        return newSet
      })
    }
  }

  const handleTypeChange = (event) => {
    const value = event.target.value
    setFilters((previous) => {
      return { ...previous, type: value }
    })
  }
  const handleSearchInputChange = (event) => {
    const value = event.currentTarget.value
    setFilters((previous) => {
      return { ...previous, searchInput: value }
    })
  }
  return (
    <div className="fixed z-[1000] flex flex-col gap-4 right-0 top-0 bottom-0 px-4 py-10 roun bg-[--pure-white] shadow-[-3px_0px_12.4px_0px_#EAEAEA91] max-w-[21rem]">
      <div className="flex flex-col gap-4 px-4">
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-[--text-light-gray]">
              Add
            </h2>

            <button onClick={onClose}>
              <CloseSquareIcon />
            </button>
          </div>
          <div className="text-xs text-[--text-black-dark] mt-2">
            item Selected - 6
          </div>
        </div>

        <div
          className="flex gap-2 overflow-x-auto theme-scrollbar pb-3"
          onClick={handleTypeChange}
        >
          <button
            value="All"
            className={`p-2 px-4 font-[Roboto] rounded-[2.5rem] text-sm  font-medium tracking-widest ${filters.type === "All" ? "bg-[--primary-blue] text-[--pure-white]" : "bg-[--primary-blue-light] text-[--text-light-gray]"}`}
          >
            ALL
          </button>
          <button
            value="Binocular"
            className={`p-2 px-4 font-[Roboto] rounded-[2.5rem] text-sm  font-medium tracking-widest ${filters.type === "Binocular" ? "bg-[--primary-blue] text-[--pure-white]" : "bg-[--primary-blue-light] text-[--text-light-gray]"}`}
          >
            BINOCULAR
          </button>
          <button
            value="Monocular"
            className={`p-2 px-4 font-[Roboto] rounded-[2.5rem] text-sm  font-medium tracking-widest ${filters.type === "Monocular" ? "bg-[--primary-blue] text-[--pure-white]" : "bg-[--primary-blue-light] text-[--text-light-gray]"}`}
          >
            MONOCULAR
          </button>
        </div>

        <div className="flex justify-between">
          <div className="text-xs font-bold tracking-widest text-[--text-light-gray]">
            EXERCISE
          </div>
          <button
            onClick={() => {
              setSelectedExercises(() => {
                return new Set(
                  notPrescribedExercises.map((item) => {
                    return item.code
                  })
                )
              })
            }}
            className="text-xs font-bold text-[--primary-blue]"
          >
            Select All
          </button>
        </div>

        <input
          onChange={handleSearchInputChange}
          className="border border-[#D6EBFF] rounded-lg h-8 w-[16.87rem] px-3"
          placeholder="Search"
        ></input>
      </div>

      <div className="overflow-y-auto theme-scrollbar">
        {notPrescribedExercises.map((exercise) => {
          return (
            <div
              className="flex items-center border-b border-[#EAEAEA]"
              key={exercise.code}
            >
              <div className="px-4 py-3 w-[4.12rem]">
                <Checkbox
                  checked={selectedExercises.has(exercise.code)}
                  onChange={exerciseCheckBoxToggle}
                  value={exercise.code}
                  icon={<CheckBoxUncheckedIcon className={"text-[#D0D5DD]"} />}
                  checkedIcon={
                    <CheckBoxCheckedIcon
                      fill="var(--primary-blue)"
                      stroke="var(--pure-white)"
                    />
                  }
                  sx={{ padding: "0" }}
                />
              </div>
              <div className="px-6 py-3 w-[14.31rem]">{exercise.code}</div>
            </div>
          )
        })}
      </div>

      <div className="flex gap-4 px-4 mt-auto">
        <Button
          disabled={selectedExercises.size === 0}
          onClick={clearSelectedExercises}
          variant="transparent"
          className="border border-[#BCBEC0] text-[--primary-blue] flex-1"
        >
          CLEAR
        </Button>
        <Button
          onClick={() => {
            handleAddExercise(
              {
                excerciseList: [...selectedExercises],
                patientId,
              },
              addExerciseSuccess
            )
          }}
          loading={isAddExerciseLoading}
          disabled={isAddExerciseLoading || selectedExercises.size === 0}
          variant="primary"
          className="border border-[#BCBEC0] text-[--primary-blue] flex-1"
        >
          PRESCIRBE
        </Button>
      </div>
    </div>
  )
}

export default PrescribeExercises
