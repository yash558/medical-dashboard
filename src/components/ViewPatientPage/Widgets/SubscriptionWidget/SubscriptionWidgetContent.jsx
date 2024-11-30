// components
import { WidgetItemInfo } from "../WidgetItemInfo"
// assets
import { OrderByIcon } from "@assets/icons"
import { calculateRenewalDate, formatDate } from "../helper"
import { useSelector } from "react-redux"
import { useState } from "react"
const packageMapping = {
  OY0240003: "Quaterly",
  OY0240006: "Half Yearly",
  OY0240012: "Annually",
}

export const SubscriptionWidgetContent = () => {
  let { patient } = useSelector((state) => state.patient)
  patient = patient?.data[0]
  const [sortOrder, setSortOrder] = useState(-1)
  const getSortedPackageHistory = () => {
    let x = patient?.packageHistory?.toSorted((a, b) => {
      a = new Date(a.subscriptionStartDate)
      b = new Date(b.subscriptionStartDate)

      if (sortOrder === -1) {
        return a - b
      } else {
        return b - a
      }
    })

    return x
  }

  const handleOrderChange = () => {
    setSortOrder((previous) => {
      if (previous === 1) {
        return -1
      } else {
        return 1
      }
    })
  }
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <WidgetItemInfo
          label="Billing Cycle"
          data={packageMapping[patient?.latestPackage]}
          className="col-span-6 sm:col-span-3"
        />
        <WidgetItemInfo
          label="Billing Date"
          data={formatDate(patient?.subscriptionStartDate)}
          className="col-span-6 sm:col-span-3"
        />
        <WidgetItemInfo
          label="Renewal Date"
          data={calculateRenewalDate(
            patient?.subscriptionStartDate,
            patient?.subscriptionDays
          )}
          className="col-span-6 sm:col-span-3"
        />
        <WidgetItemInfo
          label="Reference number"
          data={patient?.referenceNumber}
          className="col-span-6 sm:col-span-3"
        />
      </div>
      <div className="flex flex-col h-40 w-full px-3 py-2 rounded-xl bg-white overflow-y-auto theme-scrollbar">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[var(--text-theme)]">
            History
          </span>
          <button
            onClick={handleOrderChange}
            className="flex items-center justify-center h-6 w-6"
          >
            <OrderByIcon className="h-4 w-4 text-[var(--text-theme)]" />
          </button>
        </div>
        <div className="flex flex-col w-full overflow-hidden relative min-h-full">
          {!patient?.packageHistory || patient.packageHistory.length === 0 ? (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              No billing history
            </div>
          ) : (
            <div className="sticky top-0 grid grid-cols-12 bg-white">
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                Billing Cycle
              </span>
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                Receipt number
              </span>
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                Billing Date
              </span>
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                Ends On
              </span>
            </div>
          )}

          {getSortedPackageHistory()?.map((history) => (
            <div
              key={history?._id}
              className="grid grid-cols-12 border-t border-[var(--border-theme-light)]"
            >
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                {packageMapping[history?.package]}
              </span>
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)] break-all">
                {history?.receipt}
              </span>
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                {formatDate(history?.subscriptionStartDate)}
              </span>
              <span className="flex col-span-3 px-2 py-3.5 text-xs font-semibold text-[var(--text-light-gray)]">
                {calculateRenewalDate(
                  history?.subscriptionStartDate,
                  history?.subscriptionDays
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
