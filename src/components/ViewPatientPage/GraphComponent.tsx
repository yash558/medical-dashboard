import React, { useEffect, useRef, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { useSelector } from "react-redux"
import { format, parseISO } from "date-fns"
import { Tab, Tabs, TabsList } from "@mui/base"
import { GRAPH_TABS } from "./helper"
import styles from "./GraphComponent.module.css"
import LineChart from "./LineChart/LineChart"
import BarChart from "./BarChart/BarChart"
import { ChartIcon, DownArrowIcon, UserSquareIcon } from "@assets/icons"
import { Autocomplete, TextField } from "@mui/material"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)
const Graphs = ({
  game,
  handleSelectedExercise,
  filterSelected,
  setFilterSelected,
  isPdfDownload = false,
}) => {
  const [chartData, setChartData] = useState(null)
  const [chartData2, setChartData2] = useState(null)
  const { patient } = useSelector((state) => state.patient)
  const profileDetails = patient?.data[0]
  const boxRef = useRef(null)

  // dynamically assign the width of the box based on the number of labels
  const getBoxWidth = () => {
    const numberOfLabels = chartData?.labels?.length
    const boxWidth = numberOfLabels * 110

    return boxWidth
  }

  const getExerciseOptions = () => {
    if (!profileDetails) return []

    const exerciseNames = Object.keys(profileDetails.exercises)
      .filter(
        (item) => profileDetails.exercises[item]?.scoreHistory?.length > 0
      )
      .map((exerciseName) => {
        return { label: exerciseName, id: exerciseName }
      })
    return exerciseNames
  }

  const getCtx = () => {
    return 38
  }

  useEffect(() => {
    if (profileDetails && profileDetails?.exercises[game]?.scoreHistory) {
      const scoreHistory = profileDetails.exercises[game].scoreHistory

      const labels = scoreHistory.map((item) => {
        if (item.created_at) {
          const date = parseISO(item.created_at)
          return format(date, "MMM dd yyyy")
        }
        return "Unknown Date"
      })

      let dataset1, dataset2

      switch (filterSelected) {
        case "accuracyandprecision":
          dataset1 = {
            label: "Accuracy",
            data: scoreHistory.map((item) => item.accuracy.$numberDecimal),
          }
          dataset2 = {
            label: "Precision",
            data: scoreHistory.map((item) => item.precision.$numberDecimal),
          }
          break
        case "precision":
          dataset1 = {
            label: "Precision",
            data: scoreHistory.map((item) => item.precision.$numberDecimal),
          }
          break
        case "level":
          dataset1 = {
            label: "Level",
            data: scoreHistory.map((item) => item.level),
          }
          break
        case "correctness":
        default:
          dataset1 = {
            label: "Correct Answers",
            data: scoreHistory.map((item) => item.correct),
          }
          dataset2 = {
            label: "Incorrect Answers",
            data: scoreHistory.map((item) => item.incorrect),
          }
      }

      setChartData2({
        labels,
        datasets: [{ ...dataset1 }, { ...dataset2 }],
      })

      setChartData({
        labels,
        datasets: [
          {
            ...dataset1,
            borderColor: "rgba(99, 177, 252, 1)",
            backgroundColor: "rgba(99, 177, 252, 1)",
            barThickness: 50,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
          {
            ...dataset2,
            borderColor: "rgba(0, 91, 178, 1)",
            backgroundColor: "rgba(0, 91, 178, 1)",
            barThickness: 50,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      })
    }
  }, [game, filterSelected, profileDetails])

  const options2 = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 36.23,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },

    stacked: false,
    plugins: {
      title: {
        display: false,
        text: "Game Performance Over Time",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          display: false,
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: false,
        afterFit: (ctx) => {
          ctx.width = getCtx()
        },

        type: "linear",
        display: true,
        position: "left",
        title: {
          display: false,
          text: "Number of Answers",
        },
        ticks: {
          display: true,
        },
      },
    },
  }
  const options1 = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },

    stacked: false,
    plugins: {
      title: {
        display: false,
        text: "Game Performance Over Time",
      },
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: false,
          text: "Number of Answers",
        },
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
  }
  const handleChange = (event, newValue) => {
    setFilterSelected(newValue)
  }
  return (
    <div className="flex gap-4 flex-col grow overflow-hidden max-w-full">
      <div className="flex justify-between flex-wrap gap-4 mx-4 md:mx-0">
        <div className="gap-2 flex items-center">
          <UserSquareIcon className="h-6 w-6 text-[var(--text-theme)]" />
          <div className="text-xs text-[--text-light-gray] font-bold tracking-widest">
            DAN LEWY
          </div>
        </div>
        <div className="flex gap-3">
          {isPdfDownload ? (
            game
          ) : (
            <Autocomplete
              className={`w-[200px]`}
              options={getExerciseOptions()}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid var(--border-blue)",
                  background: "var(--pure-white)",
                  borderRadius: "8px",
                  lineHeight: "0.5",
                  "& fieldset": {
                    border: "none",
                  },
                  padding: ".3rem .5rem",
                  "& .MuiAutocomplete-input": { padding: "0" },
                },
                "& .MuiAutocomplete-root": {
                  borderRadius: "16px !important",
                },
              }}
              renderInput={(params) => <TextField {...params} />}
              value={game}
              clearIcon={false}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionKey={(option) => option.id}
              onChange={handleSelectedExercise}
            />
          )}
        </div>
      </div>

      {game ? (
        <div className="px-6 py-7 bg-[--primary-blue-light] rounded-3xl">
          <div
            className={`${styles.Wrapper} flex flex-col gap-4 justify-center items-center`}
          >
            <div
              className={`flex ${isPdfDownload ? "flex-row" : "flex-col md:flex-row"} gap-8 md:gap-0 justify-between w-full`}
            >
              <div className="flex gap-2 items-center">
                <ChartIcon className="h-[1.5rem] w-[1.5rem] text-[--primary-blue]" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-bold text-[--text-light-gray]">
                    CHART INSIGHTs
                  </h2>
                  <div className="text-xs text-[--text-light-gray]">
                    select to view charts
                  </div>
                </div>
              </div>
              <select
                onChange={(event) => {
                  const value = event.currentTarget.value
                  handleChange(event, value)
                }}
                className={`md:hidden text-s text-[#1D1B20] font-medium px-3 py-1 border border-[#D6EBFF] rounded-lg flex gap-3 justify-between items-center ${isPdfDownload ? "hidden" : ""}`}
              >
                <option value="correctness">CORRECTNESS</option>
                <option value="accuracyandprecision">
                  ACCURACY AND PRESCISION
                </option>
                <option value="precision">PRECISION</option>
                <option value="level">LEVEL</option>
                <option value="activity">ACTIVITY CHART</option>
                <DownArrowIcon className="h-[1.5rem] w-[1.5rem]" />
              </select>
              <Tabs
                defaultValue={"correctness"}
                value={filterSelected}
                onChange={handleChange}
                className={`min-w relative ${isPdfDownload ? "block" : "hidden"} md:block`}
              >
                <TabsList className="flex items-center gap-4 flex-wrap relative">
                  {GRAPH_TABS.map((tab) => {
                    const x = isPdfDownload ? (
                      <div
                        value={tab.key}
                        key={tab.key}
                        className={`${tab.key === filterSelected ? "text-[--primary-blue]" : "text-[var(--text-light-gray)]"} font-semibold text-xs py-1.5 px-4`}
                      >
                        {tab.label}
                      </div>
                    ) : (
                      <Tab
                        value={tab.key}
                        key={tab.key}
                        className={`${tab.key === filterSelected ? "text-white bg-[var(--bg-theme-primary)]" : "text-[var(--text-light-gray)] bg-[var(--pure-white)]"} flex items-center justify-center flex-shrink-0 text-nowrap py-1.5 px-4  text-xs rounded-full font-semibold h-full`}
                      >
                        {tab.label}
                      </Tab>
                    )
                    return x
                  })}
                </TabsList>
              </Tabs>
            </div>

            {chartData &&
            (filterSelected === "correctness" ||
              filterSelected === "precision" ||
              filterSelected === "level") ? (
              <LineChart
                options1={options1}
                chartData={chartData}
                options2={options2}
                chartData2={chartData2}
                boxRef={boxRef}
                getBoxWidth={getBoxWidth}
              />
            ) : chartData && filterSelected === "accuracyandprecision" ? (
              <BarChart
                options1={options1}
                chartData={chartData}
                options2={options2}
                chartData2={chartData2}
                boxRef={boxRef}
                getBoxWidth={getBoxWidth}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <div className="px-6 py-7 bg-[--primary-blue-light] rounded-3xl h-full grow flex justify-center items-center min-h-48">
          <h3>No exercises present</h3>
        </div>
      )}
    </div>
  )
}

export default Graphs
