// components
import { WidgetItem } from "../WidgetItem"
import { SubscriptionWidgetContent } from "./SubscriptionWidgetContent"
// assets
import { StarIcon } from "@assets/icons"

export const SubscriptionWidgetMobile = () => (
  <WidgetItem
    title="SUBSCRIPTION"
    titleIcon={<StarIcon className="h-6 w-6 text-[var(--text-theme)]" />}
    subHeading="Basic"
    content={
      <div className="flex flex-col gap-4 pt-4">
        <SubscriptionWidgetContent />
      </div>
    }
  />
)
