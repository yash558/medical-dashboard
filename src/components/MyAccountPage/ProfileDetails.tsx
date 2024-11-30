import { DownArrowIcon, UserSquareIcon } from "@assets/icons"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import CopyText from "@components/Common/CopyText"
import { Link } from "react-router-dom"
import { WidgetItemInfo } from "@components/ViewPatientPage"
import ArrowOutward from "@mui/icons-material/ArrowOutward"

interface ProfileDetailsProps {
  data: {
    name?: string
    gender?: string
    email?: string
    contact?: string
    myReferenceNumber?: string
  }
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ data }) => {
  const isMobile = window.innerWidth < 824
  const { gender, email, contact } = data || {}
  const myReferenceNumber = data?.myReferenceNumber

  const widgetData = {
    gender,
    contact,
    email,
    "Reference Number": myReferenceNumber,
  }

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
            <DownArrowIcon className="h-6 w-6 text-[#292D32] md:hidden" />
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
              <UserSquareIcon className="h-6 w-6 text-[var(--text-theme)]" />
              <h2 className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                PROFILE DETAILS
              </h2>
            </div>
            <Link
              to="/contact"
              className="hidden md:block text-xs ml-auto p-3 border border-[--primary-blue] rounded-full pointer-events-auto"
            >
              <ArrowOutward className="h-4 w-4 text-[--primary-blue]" />
            </Link>
          </div>
        </AccordionSummary>
        <h5 className="text-2xl 3xl:text-4xl text-[var(--text-theme)]">
          {data?.name || ""}
        </h5>
        <AccordionDetails className="!p-0 !m-0 !text-[var(--text-light-gray)]">
          <div className="flex gap-4 mt-4">
            {Object.keys(widgetData).map((key) => {
              const value = widgetData[key as keyof typeof widgetData]
              if (value === undefined) {
                return null
              }
              return (
                <WidgetItemInfo
                  key={key}
                  label={key}
                  data={
                    key === "Reference Number" ? (
                      <div className="flex gap-2 items-center">
                        {value}
                        <CopyText
                          textToBeCopied={value as string}
                          tooltipClassName="-left-[1rem] md:left-2/4"
                        />
                      </div>
                    ) : (
                      value
                    )
                  }
                  className={`${
                    key === "address" ? "col-span-12" : "col-span-6"
                  }`}
                />
              )
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ProfileDetails
