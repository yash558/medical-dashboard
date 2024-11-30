import { duration } from "@mui/material"

export const TABS = [
  { key: 1, label: "Monthly" },
  { key: 2, label: "Yearly" },
]

export const PLANS = [
  {
    id: "OY0240003",
    noOfMonths: 3,
    isPopular: false,
    prevPrice: "₹1760",
    price: 2400,
    planName: "Monthly",
    planDescription:
      "Join the vision revolution: Expert-endorsed eye exercises to enhance your eyesight – Get started today",
    planBenefits: [
      "50+ Exercises",
      "Premium AI based reporting and analytics",
      "VR integrations",
      "Access guide, comprehensive resources",
      "Priority chat and email support",
    ],
  },
  {
    id: "OY0240012",
    isPopular: false,
    noOfMonths: 12,
    price: 2000,
    off: "-10%",
    planName: "Yearly",
    planDescription:
      "Join the vision revolution: Expert-endorsed eye exercises to enhance your eyesight – Get started today",
    planBenefits: [
      "50+ Exercises",
      "Premium reporting and analytics",
      "VR integrations",
      "Dedicated Doctor to consult for free",
      "Priority chat and email support",
    ],
  },
]
