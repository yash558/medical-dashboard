// components
import { SubscriptionWidgetDesktop, SubscriptionWidgetMobile } from "./index"

export const SubscriptionWidget = ({ isMobile = false }) => (
  <>{isMobile ? <SubscriptionWidgetMobile /> : <SubscriptionWidgetDesktop />}</>
)
