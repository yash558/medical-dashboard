// components
import { SubscriptionWidgetContent } from "./SubscriptionWidgetContent"
// assets
import { StarIcon } from "@assets/icons"

export const SubscriptionWidgetDesktop = () => (
  <div className="flex flex-col gap-4 p-6 xl:p-8 !rounded-xl !bg-[--primary-blue-light] w-full">
    <div className="flex items-center gap-2">
      <StarIcon className="h-6 w-6 text-[var(--text-theme)]" />
      <p className="text-[var(--text-light-gray)] font-semibold text-xs capitalize whitespace-pre-line">
        SUBSCRIPTION
      </p>
    </div>
    <h5 className="text-2xl text-[var(--text-theme)]">Yearly</h5>
    <div className="flex flex-col gap-4">
      <SubscriptionWidgetContent />
    </div>
  </div>
)
