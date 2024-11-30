const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
const PATIENT_URL = import.meta.env.VITE_REACT_APP_PATIENT_URL
const createURL = (path: string) => `${BASE_URL}/${path}`

// auth
export const SIGNUP_URL = createURL("signup")
export const SIGNIN_URL = createURL("login")
export const FORGOT_PASSWORD = createURL("forgot-password")
export const VERIFY_TOKEN_PASSWORD_URL = createURL("verify-token-password")
export const RESET_PASSWORD_URL = createURL("reset-password")
export const LOGOUT_URL = createURL("logout")

// oauth
export const GOOGLE_OAUTH = createURL("vision/google/oauth-url")

//schedule appointment
export const CALENDAR_EVENT = createURL("vision/google/calendar-event")
export const ADD_CALENDAR_BOOKING = createURL("vision/addCalendarBooking")
export const IS_ACCESS_TOKEN_VALID = createURL(
  "vision/oauth/isAccessTokenValid"
)

// order
export const ORDER_INITIATE_URL = createURL("vision/order-initiate")
export const ORDER_VERIFY_URL = createURL("vision/order-verify")
export const UPDATE_SCORE_URL = createURL("updateScore")

export const GET_OWN_DETAILS = createURL("vision/getOwnDetail")

// patient
export const GET_PATIENT = createURL("vision/getPatient")
export const ADD_PATIENT = createURL("vision/addPatient")
export const ADD_NEW_PATIENT = PATIENT_URL + "/signup"
export const FIND_PATIENT = createURL("vision/findPatient")
export const ADD_COMMENT = createURL("vision/addComment")

//exercises
export const UPDATE_PATIENT_OTL = createURL("vision/updatePatientOTL")
export const UPDATE_EXERCISE_OTL = createURL("vision/updateExerciseOTL")
export const ADD_EXERCISE = createURL("vision/addExercise")
export const REMOVE_EXERCISE = createURL("vision/removeExercise")

// doctor
export const GET_PRICE = createURL("vision/getPrice")

// booking
export const GET_BOOKING = createURL("vision/getBooking")
export const GET_UPCOMING_BOOKING = createURL("vision/upcomingBooking")
export const GET_CALENDAR_BOOKING = createURL("vision/calendarBooking")
export const GET_PATIENT_COUNT = createURL("vision/getPatientCount")

//payments
export const ADD_POST_PAID = createURL("vision/post-payment")
export const GET_POST_PAYMENT_OUTSTANDING_BILL = createURL(
  "vision/post-payment-outstanding"
)
export const GET_POST_PAYMENT_OUTSTANDING_CUSTOM = createURL(
  "vision/post-payment-outstanding-custom"
)
