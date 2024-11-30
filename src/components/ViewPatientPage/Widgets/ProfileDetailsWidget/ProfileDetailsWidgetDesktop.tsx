// components
import { Link } from "react-router-dom"
import { WidgetItemInfo } from "../WidgetItemInfo"
// assets
import { UserSquareIcon } from "@assets/icons"

export const ProfileDetailsWidgetDesktop = ({ widgetData, fullName }) => {
  return widgetData ? (
    <div className="flex flex-col gap-4 p-6 xl:p-8 !rounded-xl !bg-[--primary-blue-light] w-full lg:max-w-[29.56rem]">
      <div className="flex items-center gap-2">
        <UserSquareIcon className="h-6 w-6 text-[var(--text-theme)]" />
        <p className="text-[var(--text-light-gray)] font-semibold text-xs capitalize whitespace-pre-line">
          PROFILE DETAILS
        </p>
        <Link
          to="/contact"
          className="text-xs rounded-2xl ml-auto px-4 py-1 text-[--text-black-dark] bg-[--pure-white] border border-[#D6EBFF]"
          id="contact-admin-to-edit"
        >
          contact admin to edit
        </Link>
      </div>
      <h5 className="text-2xl text-[var(--text-theme)]">{fullName}</h5>
      <div className="grid grid-cols-12 gap-4">
        {Object.keys(widgetData).map((key) => {
          const value = widgetData[key]
          if (value === undefined) {
            return null
          }
          return (
            <WidgetItemInfo
              key={key}
              label={key}
              data={value}
              className={`${key === "address" ? "col-span-12" : "col-span-6"}`}
            />
          )
        })}
      </div>
    </div>
  ) : null
}
