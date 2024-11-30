import { useState } from "react"
import styles from "./PrescribedExercisesTableHeadCellCard.module.css"
import ArrowUpIcon from "@assets/icons/arrowUp"
const PrescribedExercisesTableHeadCellCard = ({
  name,
  setShowFilters,
  setFilterToBeExpanded,
}) => {
  const [showDropDown, setShowDropDown] = useState(false)
  return (
    <div
      className={styles.tableHeadWrapper}
      onClick={() => {
        setShowDropDown((previous) => {
          return !previous
        })
      }}
    >
      {name}
      <ArrowUpIcon className="text-[--primary-blue]" />
      {showDropDown ? (
        <div className={styles.filterDropdown}>
          <div className={styles.option}>A - Z</div>
          <div className={styles.option}>Z - A</div>
          <div
            className={styles.option}
            data-name={name}
            onClick={(event) => {
              const filterName = event.currentTarget.getAttribute("data-name")

              setFilterToBeExpanded(filterName)
              setShowFilters(true)
            }}
          >
            Filter by
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PrescribedExercisesTableHeadCellCard
