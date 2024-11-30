import React from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import ContrastSensitivityIcon from "../../assets/icons/device"
import DashBoardIcon from "../../assets/icons/dashBoardIcon"
import MyAccountIcon from "../../assets/icons/myAccount"
import ColorIcon from "../../assets/icons/color"
import VisualIcon from "../../assets/icons/visual"
import VisionIcon from "../../assets/icons/vision"
import ColorVisionIcon from "../../assets/icons/ColorVision"
import TestsIcon from "../../assets/icons/testIcon"
import OtherApplicationsIcon from "../../assets/icons/otherApplications"
import { setOpen } from "@redux/slices/authenticationSlice"
import { useDispatch } from "react-redux"
import { ChartIcon } from "@assets/icons"

interface SideBarItemProps {
  route: string
  showText: boolean
  linkClassName?: string
  linkActiveClassName?: string
  onClick?: () => void
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  route,
  showText,
  linkClassName = "",
  linkActiveClassName = "",
  onClick,
}) => {
  const pathName = useLocation().pathname
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(setOpen())
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const isActive = (targetRoute: string): boolean =>
    targetRoute === pathName || pathName.includes(targetRoute)

  return (
    <>
      {route === "/other-apps" && (
        <Link
          to={route}
          className={`${linkClassName} ${
            route === pathName ? linkActiveClassName : ""
          }`}
        >
          <OtherApplicationsIcon />
          {showText && "OTHER APPS"}
        </Link>
      )}

      {
        route === "/pdf-viewer" && (
          <Link to={route} className={`${linkClassName} ${
            route === pathName ? linkActiveClassName : ""
          }`}>
            <ChartIcon />
            {showText && "PDF VIEWER"}
          </Link>
        )
      }

      {route === "/vision-therapy" && (
        <Link
          to={route}
          className={`${linkClassName} ${
            isActive(route) ? linkActiveClassName : ""
          }`}
          onClick={() => {
            if (!isActive(route)) {
              handleOpen()
            }
          }}
        >
          <VisionIcon stroke={isActive(route) ? "#fff" : ""} />
          {showText && "VISION THERAPY"}
        </Link>
      )}

      {route === "/visual-acuity" && (
        <Link
          to={route}
          className={`${linkClassName} ${
            route === pathName ? linkActiveClassName : ""
          }`}
        >
          <VisualIcon stroke={route === pathName ? "#fff" : ""} />
          {showText && "VISUAL ACUITY"}
        </Link>
      )}

      {route === "/color-vision" && (
        <Link
          to={route}
          className={`${linkClassName} ${
            isActive(route) ? linkActiveClassName : ""
          }`}
        >
          <ColorVisionIcon stroke={isActive(route) ? "#fff" : ""} />
          {showText && "COLOR VISION"}
        </Link>
      )}

      {route === "/dashboard" && (
        <Link
          to={route}
          className={`${linkClassName} px-5 py-4 ${
            route === pathName ? linkActiveClassName : ""
          }`}
        >
          <DashBoardIcon stroke={route === pathName ? "#000" : "#292D32"} />
          <p className="font-bold leading-4 text-[#475467]">
            {showText && "HOME"}
          </p>
        </Link>
      )}

      {route === "/contrast-sensitivity" && (
        <Link
          to={route}
          className={`${linkClassName} ${
            isActive(route) ? linkActiveClassName : ""
          }`}
          onClick={() => {
            if (!isActive(route)) {
              handleClick()
            }
          }}
        >
          <ContrastSensitivityIcon stroke={route === pathName ? "#fff" : ""} />
          {showText && "CONTRAST SENSITIVITY"}
        </Link>
      )}

      {route === "/color-sensitivity" && (
        <Link to={route} className={linkClassName}>
          <ColorIcon stroke={route === pathName ? "#fff" : ""} />
          {showText && "COLOR SENSITIVITY"}
        </Link>
      )}

      {route === "/tests" && (
        <Link
          to={route}
          className={`${linkClassName} ${
            route === pathName ? linkActiveClassName : ""
          }`}
        >
          <TestsIcon stroke={route === pathName ? "#fff" : ""} />
          {showText && "TESTS"}
        </Link>
      )}

      {route === "/my-account" && (
        <Link
          to={route}
          className={`${linkClassName} p-4 ${
            route === pathName ? linkActiveClassName : ""
          }`}
        >
          <MyAccountIcon stroke={route === pathName ? "#fff" : "# "} />
          <p className="font-bold leading-4 text-[#475467]">
            {showText && "MY ACCOUNT"}
          </p>
        </Link>
      )}
    </>
  )
}

export default SideBarItem
