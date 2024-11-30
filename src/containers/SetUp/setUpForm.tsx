import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import QrCode from "@assets/Common/qrcode.svg"
import {
  Button,
  TextField,
  Grid,
  Typography,
  SvgIcon,
  Box,
} from "@mui/material"
import Phone from "@assets/Common/phone.svg"
import { useMediaQuery, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

// Personal Details Component
const PersonalDetails = () => (
  <div
    style={{
      background:
        "radial-gradient(190.96% 51.11% at 13.46% 48.89%, rgba(80, 128, 253, 0.16) 16.22%, rgba(255, 255, 255, 0.16) 75%) radial-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64))",
      backdropFilter: "blur(79.5px)",
    }}
    className="w-full max-w-xl md:max-w-4xl bg-white rounded-lg shadow-lg p-20"
  >
    {/* Text Content */}
    <div className="flex flex-col items-start max-w-[720px] justify-between m-4 gap-5">
      <h1 className="text-3xl md:text-5xl font-normal text-[#171717] mb-6 leading-[56px]">
        Set-up Two Factor Authorization
      </h1>

      <span className="text-xs text-[#6B7280] max-w-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>

      <p className="text-[#475467] text-base leading-6 font-medium mb-6">
        Registered Email: example@gmail.com
      </p>
    </div>

    <div className="flex justify-between pl-4">
      <div className="flex flex-col max-w-72 w-full items-center gap-1">
        <button className="w-full  bg-[#005BB2]  text-white py-3 rounded-lg hover:bg-[#004494] transition">
          SEND QR TO EMAIL
        </button>
        <span className="text-black text-xs flex items-center gap-1 font-bold ">
          Need Help:{" "}
          <a
            href="#"
            className="text-[#005BB2] flex items-center hover:underline gap-1"
          >
            Quick tutorial video
            <ArrowOutwardIcon sx={{ fontSize: 12 }} />
          </a>
        </span>
      </div>
      <div className="md:flex justify-end items-end hidden h-64">
        <img
          src={QrCode}
          alt="QR Code Email Preview"
          className="w-full h-full rounded-md"
        />
      </div>
    </div>

    {/* <div className="flex-1">
      <h1 className="text-3xl font-normal md:text-5xl text-[#171717] mb-4">
        Set-up Two Factor Authorization
      </h1>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p className="text-gray-800 font-medium mb-6">
        Registered Email:{" "}
        <span className="text-gray-900 font-semibold">example@gmail.com</span>
      </p>

      <button className="w-full bg-[#005BB2] text-white py-3 rounded-lg hover:bg-[#004494] transition">
        SEND QR TO EMAIL
      </button>

      <div className="mt-4">
        <a href="#" className="text-black text-sm font-bold hover:underline">
          Need Help:{" "}
          <span className="text-[#005BB2]">Quick tutorial video</span> →
        </a>
      </div>
    </div> */}

    {/* QR Code Section */}
    {/* <div className="flex-1 hidden md:flex items-center justify-center">
      <img
        src={QrCode}
        alt="QR Code Email Preview"
        className="w-60 rounded-md"
      />
    </div> */}
  </div>
)

const ContactDetails = () => (
  <div
    style={{
      background:
        "radial-gradient(190.96% 51.11% at 13.46% 48.89%, rgba(80, 128, 253, 0.16) 16.22%, rgba(255, 255, 255, 0.16) 75%) radial-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64))",
      backdropFilter: "blur(79.5px)",
    }}
    className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-20 flex flex-col  "
  >
    {/* Left Section */}
    <div className="w-full max-w-3xl">
      <h1 className="text-2xl md:text-5xl max-w-xl font-normal leading-[56px] text-[#1D2939] mb-6 ">
        Scan the QR from any mobile authenticator app
      </h1>

      {/* Subtitle */}
      <div className="w-full">
        <p className="text-[#475467] text-base md:text-lg mb-4">
          Follow simple steps to complete the process
        </p>

        {/* Ordered List */}
        <ol className="space-y-6">
          {/* Step 1 */}
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-[#005BB2] text-[#005BB2] font-bold rounded-lg p-4">
              1
            </div>
            <p className="text-[#475467] text-sm md:text-base">
              Open the new authentication email received on{" "}
              <span className="font-semibold">example@gmail.com</span>
            </p>
          </li>

          {/* Step 2 */}
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-[#005BB2] text-[#005BB2] font-bold rounded-lg p-4">
              2
            </div>
            <div>
              <p className="text-[#475467] text-sm md:text-base">
                Scan the QR by any mobile authenticator app
              </p>
              <p className="text-sm max-w-sm  text-[#6B7280] mt-2">
                Our QR can be scanned via any of these apps: Google
                Authenticator (preferred), Microsoft Authenticator (preferred),
                Authy, LastPass Authenticator, FreeOTP, 1Password, Duo Mobile.
              </p>
            </div>
          </li>

          {/* Step 3 */}
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-[#005BB2] text-[#005BB2] font-bold rounded-lg p-4">
              3
            </div>
            <p className="text-[#475467] text-sm md:text-base">
              After Scanning you will receive verification codes
            </p>
          </li>
        </ol>
      </div>

      {/* Action Button */}
      {/* <div className="flex justify-center items-center flex-col mt-8">
        <button className="bg-[#005BB2] w-full md:w-96 text-white py-3 rounded-lg hover:bg-[#004494] transition font-medium text-base md:text-lg">
          Next, I have scanned
        </button>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-[#000000] font-medium hover:underline text-sm md:text-base"
          >
            Need Help:{" "}
            <span className="text-[#005BB2]">Quick tutorial video ↗</span>
          </a>
        </div>
      </div> */}
    </div>

    <div className="w-full flex gap-8 relative -top-10 justify-between items-center">
      <div className="flex justify-center items-center flex-col mt-8">
        <button className="bg-[#005BB2] w-full md:w-96 text-white py-3 rounded-lg hover:bg-[#004494] transition font-medium text-base md:text-lg">
          Next, I have scanned
        </button>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-[#000000] font-medium hover:underline text-sm md:text-base"
          >
            Need Help:{" "}
            <span className="text-[#005BB2]">Quick tutorial video ↗</span>
          </a>
        </div>
      </div>
      <div className="h-64 hidden md:flex items-center justify-center">
        <img
          src={QrCode}
          alt="QR Code Email Preview"
          className="h-full w-auto rounded-md"
        />
      </div>
    </div>
  </div>
)

const VerifyPin = ({ onSuccess }: { onSuccess: () => void }) => {
  const [pin, setPin] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(20)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSuccess = () => {
    onSuccess()
  }

  const handleInputChange = (value: string, index: number) => {
    const updatedPin = [...pin]
    updatedPin[index] = value
    setPin(updatedPin)

    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`pin-${index + 1}`)
      if (nextInput) (nextInput as HTMLInputElement).focus()
    }
  }

  const isButtonDisabled = pin.some((digit) => digit === "")

  return (
    <div
      style={{}}
      className="w-full max-w-xxl min-w-[768px] bg-blue-50 rounded-lg shadow-lg p-20"
    >
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <h1 className="text-3xl md:text-5xl font-normal text-[#171717] mb-6 leading-[56px]">
          Verify Pin
        </h1>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mb: isMobile ? 2 : 4 }}
        >
          Enter the code provided by your authenticator app to verify
        </Typography>

        <Grid container spacing={1} justifyContent="start">
          {pin.map((digit, index) => (
            <Grid item key={index}>
              <TextField
                id={`pin-${index}`}
                value={digit}
                className="border-[#E0E0E0] aspect-square"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value.replace(/[^0-9]/g, ""),
                    index
                  )
                }
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", fontSize: "1.5rem" },
                }}
                sx={{
                  width: isMobile ? "40px" : "80px",
                  height: isMobile ? "40px" : "80px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        <div className="w-full flex flex-col gap-0 items-start justify-start mb-40">
          <Button
            variant="contained"
            className="w-full max-w-64 rounded-lg"
            fullWidth
            sx={{
              bgcolor: isButtonDisabled ? "#E0E0E0" : "#005BB2",
              color: "white",
              mt: 4,
              borderRadius: "8px",
              height: isMobile ? "40px" : "50px",
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                bgcolor: isButtonDisabled ? "#E0E0E0" : "#004494",
              },
            }}
            onClick={handleSuccess}
            disabled={isButtonDisabled}
          >
            Confirm
          </Button>

          <div
            className="w-full max-w-64 rounded-lg text-center flex items-center justify-center gap-2"
            style={{
              // mt: 2,
              color: "#475467",
              textTransform: "none",
            }}
          >
            Send code again{" "}
            <Typography
              component="span"
              className="leading-16"
              sx={{ fontWeight: "bold", color: "#475467" }}
            >
              00:{timer < 10 ? `0${timer}` : timer}
            </Typography>
          </div>
        </div>
      </div>
    </div>
    // <Box
    //   sx={{
    //     width: isMobile ? "90%" : "700px",
    //     bgcolor: "#f5f9ff",
    //     p: isMobile ? 2 : 4,
    //     borderRadius: 2,
    //     boxShadow: 3,
    //     position: "relative",
    //     mt: isMobile ? "5vh" : "10vh",
    //     textAlign: "center",
    //   }}
    // >
    //   <Typography
    //     variant={isMobile ? "h6" : "h4"}
    //     fontWeight="bold"
    //     gutterBottom
    //   >
    //     Verify Pin
    //   </Typography>
    //   <Typography
    //     variant="body2"
    //     color="textSecondary"
    //     sx={{ mb: isMobile ? 2 : 4 }}
    //   >
    //     Enter the code provided by your authenticator app to verify
    //   </Typography>

    //   <Grid container spacing={1} justifyContent="center">
    //     {pin.map((digit, index) => (
    //       <Grid item key={index}>
    //         <TextField
    //           id={`pin-${index}`}
    //           value={digit}
    //           onChange={(e) =>
    //             handleInputChange(e.target.value.replace(/[^0-9]/g, ""), index)
    //           }
    //           inputProps={{
    //             maxLength: 1,
    //             style: { textAlign: "center", fontSize: "1.5rem" },
    //           }}
    //           sx={{
    //             width: isMobile ? "40px" : "60px",
    //             "& .MuiOutlinedInput-root": {
    //               borderRadius: "8px",
    //             },
    //           }}
    //         />
    //       </Grid>
    //     ))}
    //   </Grid>

    //   <Button
    //     variant="contained"
    //     fullWidth
    //     sx={{
    //       bgcolor: isButtonDisabled ? "#E0E0E0" : "#005BB2",
    //       color: "white",
    //       mt: 4,
    //       height: isMobile ? "40px" : "50px",
    //       fontSize: "1rem",
    //       textTransform: "none",
    //       "&:hover": {
    //         bgcolor: isButtonDisabled ? "#E0E0E0" : "#004494",
    //       },
    //     }}
    //     onClick={handleSuccess}
    //     disabled={isButtonDisabled}
    //   >
    //     Confirm
    //   </Button>

    //   <Typography variant="body2" color="textSecondary" mt={2}>
    //     Send code again{" "}
    //     <Typography
    //       component="span"
    //       sx={{ fontWeight: "bold", color: "#475467" }}
    //     >
    //       00:{timer < 10 ? `0${timer}` : timer}
    //     </Typography>
    //   </Typography>
    // </Box>
  )
}

const SetupComplete = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      className="p-20"
      sx={{
        width: isMobile ? "100%" : "50rem",
        height: isMobile ? "auto" : "640px",
        bgcolor: "#f5f9ff",
        p: isMobile ? 4 : 8,
        borderRadius: "12px",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: isMobile ? "5vh" : "10vh",
      }}
    >
      <SvgIcon
        className="text-green-500 mb-4 border-2 border-green-500 rounded-full p-2"
        sx={{ fontSize: isMobile ? 80 : 110 }}
      >
        <circle cx="12" cy="12" r="10" fill="none" />
        <path d="M8 12.5l3 3 5-7" fill="none" stroke="currentColor" />
      </SvgIcon>
      <Typography
        variant={isMobile ? "h6" : "h5"}
        fontWeight="light"
        gutterBottom
      >
        Two-Factor Authentication <br />
        is set and verified
      </Typography>
      <Button
        onClick={() => navigate("/dashboard")}
        variant="contained"
        sx={{
          bgcolor: "#005BB2",
          color: "white",
          mt: 4,
          width: isMobile ? "70%" : "20rem",
          padding: "0.8rem",
          borderRadius: "10px",
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  )
}

// Main Setup Form Component
export const SetUpForm = () => {
  const [formSteps, setFormSteps] = useState(1)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSteps(formSteps + 1)
  }
  const steps = [
    <PersonalDetails key={1} />,
    <ContactDetails key={2} />,
    <VerifyPin onSuccess={() => setFormSteps(4)} key={3} />,
    <SetupComplete key={4} />,
  ]

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center p-4">
        {steps[formSteps - 1]}
      </div>
    </form>
  )
}
