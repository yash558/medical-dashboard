import { DownArrowIcon } from "@assets/icons"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { WidgetItemInfo } from "@components/ViewPatientPage"
import HospitalIcon from "@assets/icons/hospital"
import { VerifyIcon } from "@assets/icons"

const InstituteDetails = ({ data }) => {
  const isMobile = window.innerWidth < 824

  const { instituteName, pincode } = data?.instituteDetails || {}
  const createdAt = data?.created_at
  const { isVerified, verifiedOn } = data?.access?.accountVerified || {}
  const getAccountVerified = () => {
    if (isVerified === true) {
      return "yes"
    } else if (isVerified === false) {
      return "no"
    }
  }

  const getCreatedAt = () => {
    if (createdAt) {
      return new Date(createdAt).toLocaleDateString()
    }
  }
  const getVerifiedOn = () => {
    if (verifiedOn) {
      return new Date(createdAt).toLocaleString()
    }
  }

  const widgetData = data
    ? {
        "Institute name": instituteName,
        pincode: pincode,
        "created at": getCreatedAt(),
        "Account verified": getAccountVerified(),
        // "verified on": getVerifiedOn(),
      }
    : {}

  return (
    <>
      <Accordion
        disabled={!isMobile}
        className="p-4 py-8 md:px-8 md:py-10 !white !rounded-2xl flex flex-col relative md:mx-0 !shadow-none min-h-[88px] before:hidden border border-[#D6EBFF] !bg-[--pure-white]"
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
              <HospitalIcon
                className="h-6 w-6 text-[var(--text-theme)]"
                strokeWidth="2"
              />
              <h2 className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                INSTITUTE DETAILS
              </h2>
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails
          className="!p-0 !m-0 !text-[var--(--text-light-gray)]"
          disableSpacing
        >
          <div className="grid grid-cols-12 gap-4 mt-4">
            {Object.keys(widgetData).map((key) => {
              const value = widgetData[key]
              if (value === undefined || value === null) {
                return null
              }
              return (
                <WidgetItemInfo
                  key={key}
                  label={key}
                  data={
                    key === "Account verified" ? (
                      <div className="flex gap-2 items-center">
                        {widgetData[key]}
                        <VerifyIcon className="text-[--primary-blue]" />
                      </div>
                    ) : (
                      widgetData[key]
                    )
                  }
                  className={`${key === "address" ? "col-span-12" : "col-span-6"}`}
                />
              )
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default InstituteDetails
