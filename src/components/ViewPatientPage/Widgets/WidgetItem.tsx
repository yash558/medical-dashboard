// components
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { DownArrowIcon } from "@assets/icons"
// assets
import graph from "@assets/graph.svg"

export const WidgetItem = ({
  title,
  subHeading,
  titleIcon,
  content,
  vector = false,
  editComponent,
}) => (
  <Accordion
    className="relative !shadow-none py-4 px-4 !rounded-xl !bg-[--primary-blue-light] min-h-[124px] before:hidden"
    disableGutters
    disableSpacing
  >
    <div className="flex flex-col">
      <AccordionSummary
        expandIcon={
          <DownArrowIcon
            className={`h-6 w-6 text-[#292D32]`}
            disableGutters
            disableSpacing
          />
        }
        className="!p-0 !min-h-6 !m-0 border-none z-[1]"
        disableSpacing
        disableGutters
      >
        <div className="flex justify-between items-center grow">
          <div className="flex items-center gap-2">
            {titleIcon && titleIcon}
            <p className="text-[var(--text-light-gray)] font-semibold text-xs capitalize whitespace-pre-line">
              {title}
            </p>
          </div>
          {editComponent}
        </div>
      </AccordionSummary>
      {subHeading && (
        <h5 className="text-2xl text-[var(--text-theme)] py-2">{subHeading}</h5>
      )}
      {vector && (
        <img src={graph} alt="graph" className="absolute top-10 right-0" />
      )}
    </div>
    {content && (
      <AccordionDetails
        className="!p-0 !m-0 !text-[var--(--text-light-gray)]"
        disableSpacing
      >
        {content}
      </AccordionDetails>
    )}
  </Accordion>
)
