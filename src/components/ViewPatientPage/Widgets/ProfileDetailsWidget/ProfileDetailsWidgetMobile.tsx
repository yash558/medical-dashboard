// components
import { WidgetItem, WidgetItemInfo } from "../index"
// assets
import { PenIcon, UserSquareIcon } from "@assets/icons"
import { Link } from "react-router-dom"

export const ProfileDetailsWidgetMobile = ({ widgetData, fullName }) => {
  return widgetData ? (
    <WidgetItem
      title="PROFILE DETAILS"
      titleIcon={
        <UserSquareIcon className="h-6 w-6 text-[var(--text-theme)]" />
      }
      subHeading={fullName}
      editComponent={
        <Link
          to="/contact"
          className="px-4 py-1 border border-[#D6EBFF] rounded-2xl mr-4"
          id="contact-admin-to-edit"
        >
          <PenIcon className="h-[1rem] w-[1rem] text-[--primary-blue]" />
        </Link>
      }
      content={
        <div className="grid grid-cols-12 gap-4 pt-4">
          {Object.keys(widgetData).map((key) => {
            const value = widgetData[key]
            if (value === undefined) {
              return null
            }
            return (
              <WidgetItemInfo
                key={key}
                label={key}
                data={widgetData[key]}
                className={`${key === "address" ? "col-span-12" : "col-span-6"}`}
              />
            )
          })}
        </div>
      }
    />
  ) : null
}
