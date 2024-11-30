export const SUMMARY_WIDGET_DATA = {
  totalTimeSpent: "21:03",
  totalAccuracy: "8.5",
  totalFrequency: "32",
}

export const SCORE_REPORT_TABS = [
  { key: "all", label: "ALL" },
  { key: "Binocular", label: "BINOCULAR" },
  { key: "Monocular", label: "MONOCULAR" },
  { key: "Neurovision", label: "NEURO VISION" },
  { key: "Baseinbaseout", label: "BASE-IN BASE-OUT" },
]

export const formatDate = (date) => {
  if (!date) return ""
  const options = { year: "numeric", month: "numeric", day: "numeric" }
  return new Date(date).toLocaleDateString("en-US", options)
}

export const calculateRenewalDate = (startDate, days) => {
  if (!startDate || !days) return ""
  const renewalDate = new Date(startDate)
  renewalDate.setDate(renewalDate.getDate() + days)
  return formatDate(renewalDate)
}
