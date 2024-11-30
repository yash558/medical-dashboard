import { DownArrowIcon } from "@assets/icons"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Money } from "@assets/icons"
import usePostPaid from "@hooks/usePostPaid"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import FullpageLoadingState from "@components/Common/FullpageLoadingState"

import formatDateFromISOString from "src/utils/formatDate"
const MyPostPayments = () => {
  const isMobile = window.innerWidth < 824
  const [selectedCustomDate, setSelectedCustomDate] = useState(new Date())
  const {
    handleGetPostPaymentOutstandingBill,
    handleGetPostPaymentOutstandingCustom,
  } = usePostPaid()
  const {
    isGetPostPaymentOutstandingBillLoading,
    isGetPostPaymentOutstandingCustomLoading,
    postPaymentOutstandingBill,
    postPaymentOutstandingCustom,
  } = useSelector((state) => state.postPaid)

  useEffect(() => {
    handleGetPostPaymentOutstandingBill()
  }, [handleGetPostPaymentOutstandingBill])

  const onPostPaymentOustandingCustomDateChange = (date) => {
    handleGetPostPaymentOutstandingCustom(
      {
        date: date.toISOString(),
      },
      () => {
        setSelectedCustomDate(date.toISOString())
      }
    )
  }

  const getCustomDateString = () => {
    const x = formatDateFromISOString(selectedCustomDate)
    return `${x.specificMonthName} ${x.year}`
  }
  useEffect(() => {
    const currentDate = new Date()
    handleGetPostPaymentOutstandingCustom({
      date: currentDate.toISOString(),
    })
  }, [])
  return (
    <>
      {isGetPostPaymentOutstandingBillLoading ||
      isGetPostPaymentOutstandingCustomLoading ? (
        <FullpageLoadingState />
      ) : null}
      <Accordion
        disabled={!isMobile}
        className="p-4 py-8 md:px-8 md:py-10 !grow md:!max-w-[484px]  !white !rounded-2xl flex flex-col relative md:mx-0 !shadow-none min-h-[88px] before:hidden border border-[#D6EBFF] !bg-[--pure-white]"
        sx={{
          "&.Mui-expanded": {
            gap: "16px",
          },
        }}
        disableGutters
        disableSpacing
        defaultExpanded={!isMobile}
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
          sx={{
            ".MuiAccordionSummary-content": {
              margin: 0,
            },
            "&.Mui-disabled": {
              opacity: "1",
            },
          }}
          disableSpacing
          disableGutters
        >
          <div className="flex items-center gap-4 justify-between grow">
            <div className="flex gap-2 items-center">
              <Money className="h-6 w-6 text-[var(--text-theme)]" />
              <h2 className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                MY POST PAYMENTS
              </h2>
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails
          className="!p-0 !m-0 !text-[var--(--text-light-gray)]"
          disableSpacing
        >
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex grow gap-4 p-2 rounded-2xl bg-[--primary-blue-light]">
              <div className="p-4 gap-4 rounded-2xl bg-[--primary-blue] flex flex-col grow h-[7.1rem] justify-between">
                <div className="text-xs text-[--pure-white]">
                  Total <br></br>outstanding bill
                </div>
                <div className="text-2xl text-[--pure-white]">
                  $ {postPaymentOutstandingBill?.outstandingAmount}
                </div>
              </div>
              <div className="p-4 gap-4 rounded-2xl bg-[--pure-white] flex flex-col grow h-[7.1rem] justify-between">
                <div className="text-xs text-[--text-black-dark]">
                  {getCustomDateString()}
                  {} <br></br> Outstanding Bill
                </div>
                <div className="text-2xl text-[--primary-blue]">
                  $ {postPaymentOutstandingCustom?.outstandingAmount || 0}
                </div>
              </div>
            </div>
            <div className="flex grow gap-4 p-4 rounded-2xl bg-[--primary-blue-light] flex-col">
              <h2 className="text-xs text-[--text-black-dark]">
                Select Month to view Bill
              </h2>
              <AppointmentCalendar
                onChange={onPostPaymentOustandingCustomDateChange}
                views={["month", "year", "month"]}
              />
              <div className="flex justify-between items-center grow px-8 py-2 rounded-2xl bg-[--primary-blue]">
                <div className="text-sm text-[--pure-white] font-bold">
                  May 24
                </div>
                <div className="text-xs text-[--pure-white] font-bold">
                  INR 2500
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default MyPostPayments
