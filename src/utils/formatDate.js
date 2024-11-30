export default function formatDateFromISOString(dateString) {
  if (!dateString) {
    return null
  }
  const date = new Date(dateString)

  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0") // Months are zero-based
  const year = String(date.getFullYear()).slice(-2) // Get the last two digits of the year
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"]
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return {
    date: `${day}-${month}-${year}`,
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    dayAsName: daysOfWeek[date.getDay()],
    day,
    month,
    dateObject: new Date(dateString),
    specificMonthName: monthNames[date.getMonth()],
  }
}
