import { Pagination } from "@mui/material"
import TableFooter from "@mui/material/TableFooter"
import styles from "./PrescribedExercisesTable.module.css"
import PaginationItem from "@mui/material/PaginationItem"
import ArrowLeftIcon from "@assets/icons/arrowLeft"
import ArrowRightIcon from "@assets/icons/arrowRight"
const Footer = ({ setPaginationState, paginationState, getBookingData }) => {
  return (
    <TableFooter
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #EAEAEA",
        borderLeft: "1px solid #EAEAEA",
        borderRight: "1px solid #EAEAEA",
        backgroundColor: "white",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        padding: "5px",

        "@media (max-width:1215px)": {
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        },
        "@media (max-width:700px)": {
          backgroundColor: "transparent",
          border: "none",
        },
      }}
    >
      <div className={styles.rowsPerPageSection}>
        <h3>Rows per page</h3>
        <select
          className={styles.rowsPerPageOptionsWrapper}
          onChange={(event) => {
            const value = event.currentTarget.value
            setPaginationState({ page: 1, limit: value })
          }}
          value={paginationState.limit}
          // disabled={isGetBookingLoading ? true : false}
        >
          <option value="10">1-10</option>
          <option value="20">1-20</option>
          <option value="30">1-30</option>
        </select>
        <h3>of patient details</h3>
      </div>

      <div className={styles.mobilePaginationSection}>
        <button
          // disabled={isGetBookingLoading ? true : false}
          className={styles.mobilePaginationPreviousButton}
          onClick={() => {
            if (parseInt(paginationState.page) - 1 >= 1) {
              setPaginationState((previous) => {
                return {
                  ...previous,
                  page: parseInt(previous.page) - 1,
                }
              })
            }
          }}
        >
          <ArrowLeftIcon stroke="var(--text-black-dark)" />
          Previous
        </button>
        <select
          className={styles.rowsPerPageOptionsWrapper}
          onChange={(event) => {
            const value = event.currentTarget.value
            setPaginationState({ page: 1, limit: value })
          }}
          value={paginationState.limit}
        >
          <option value="10">1-10</option>
          <option value="20">1-20</option>
          <option value="30">1-30</option>
        </select>
        <button
          className={styles.mobilePaginationNextButton}
          onClick={() => {
            if (
              parseInt(paginationState.page) + 1 <=
              Math.ceil(getBookingData?.total_record / paginationState.limit)
            ) {
              setPaginationState((previous) => {
                return {
                  ...previous,
                  page: parseInt(previous.page) + 1,
                }
              })
            }
          }}
        >
          Next
          <ArrowRightIcon stroke="var(--text-black-dark)" />
        </button>
      </div>
      <Pagination
        count={Math.ceil(getBookingData?.total_record / paginationState.limit)}
        defaultPage={1}
        siblingCount={1}
        boundaryCount={1}
        onChange={(event, page) => {
          console.log(event, page)
          setPaginationState((previous) => {
            return { ...previous, page }
          })
        }}
        sx={{
          "@media (max-width:700px)": {
            display: "none",
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            components={{
              previous: () => (
                <div className={styles.paginationPreviousButton}>
                  <ArrowLeftIcon />
                  Previous
                </div>
              ),
              next: () => (
                <div className={styles.paginationNextButton}>
                  Next
                  <ArrowRightIcon />
                </div>
              ),
            }}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "var(--primary-blue-light)",
              },
            }}
            {...item}
          />
        )}
        shape="rounded"
      />
    </TableFooter>
  )
}

export default Footer
