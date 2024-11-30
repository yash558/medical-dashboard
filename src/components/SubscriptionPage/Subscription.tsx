import { useState } from "react"
import { TabsList, Tabs, Tab } from "@mui/base"
import SubscriptionPlanCard from "./SubscriptionPlanCard"
// helpers
import { PLANS, TABS } from "./helper"
import ArrowSquareLeftIcon from "@assets/icons/arrowSquareLeft"
import OrderSummary from "./OrderSummary"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import useProfile from "@hooks/useProfile"
import { useEffect } from "react"
import FullpageLoadingState from "@components/Common/FullpageLoadingState"


const Subscription = () => {
  const [value, setValue] = useState(1)
  const [showOrderSummary, setShowOrderSummary] = useState(false)
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null)
  const [searchParams] = useSearchParams()
  const email = searchParams.get("email")
  const isEnabled = searchParams.get("isEnabled")
  const navigate = useNavigate()
  const { isGetPriceLoading } = useSelector(
    (state: any) => state.profile
  )
  const { handleGetPrice } = useProfile()

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
  }

  const backButtonClickHandler = () => {
    if (showOrderSummary) {
      setShowOrderSummary(false)
    } else {
      navigate("/manage-patient-vision")
    }
  }

  // useEffect(() => {
  //   if (!email || !name || !isEnabled) {
  //     notify("invalid details", "error")
  //     navigate("/manage-patient-vision")
  //   }
  // }, [])
  useEffect(() => {
    handleGetPrice()
  }, [handleGetPrice])

  return (
    <>
      {isGetPriceLoading ? <FullpageLoadingState /> : null}
      <div className="flex flex-col gap-3 md:gap-16">
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-6">
          <div className="flex flex-col gap-2">
            <button className="md:hidden mb-5" onClick={backButtonClickHandler}>
              <ArrowSquareLeftIcon />
            </button>
            {/* <button
              className="hidden md:flex gap-3 items-center mb-4"
              onClick={backButtonClickHandler}
            >
              <div className="hidden md:block">
                <ArrowLeftIcon width="24" height="24" />
              </div>
              <div className="text-sm text-[--primary-blue] font-bold">
                BACK
              </div>
            </button> */}

            <h1 className="text-xs md:text-base font-extrabold text-[--primary-blue]">
              PRICING PLAN
            </h1>
            <p className="text-xs md:text-xl text-[--text-light-gray] font-semibold">
              Select the plan that is well suited for the patien
            </p>
          </div>
          {/* <div className="font-bold text-xs md:text-sm text-[--text-gray-light] mt-auto">
            Paitent Name - {name} | Email-{email}
          </div> */}
          <Link to="/manage-patient-vision" className="text-xs md:text-sm text-[--text-gray-light] font-bold mt-auto">
             Skip for Now
          </Link>
        </div>

        {!showOrderSummary ? (
          <div className="flex flex-col gap-3 md:gap-[6rem] w-full h-full">
            <div className="flex items-center justify-center md:hidden">
              <Tabs
                defaultValue={1}
                value={value}
                onChange={(event, newValue) => handleChange(event, newValue)}
                className="min-w relative"
              >
                <div className="absolute left-0 top-0 h-full p-[8px] bg-[#ECF6FF] w-full rounded-full overflow-hidden">
                  <div
                    className="bg-white transition-all duration-300 ease-in-out h-full rounded-full"
                    style={{
                      width: `${100 / TABS.length}%`,
                      transform: `translateX(${(value - 1) * 100}%)`,
                    }}
                  />
                </div>
                <TabsList className="flex items-center gap-4 rounded-full w-full p-[8px] px-[16px] relative">
                  {TABS.map((tab) => (
                    <Tab
                      value={tab.key}
                      key={tab.key}
                      className={`${tab.key === value ? "text-[var(--text-theme)]" : ""}  flex items-center justify-center flex-shrink-0 text-nowrap py-1.5 px-4 text-[14px] leading-[24px] rounded-full font-semibold h-full`}
                    >
                      {tab.label}
                    </Tab>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div className="flex items-center justify-center lg:justify-start flex-wrap lg:flex-nowrap gap-[32px]">
              {PLANS.map((plan, index) => (
                <SubscriptionPlanCard
                  key={plan.planName}
                  {...plan}
                  setShowOrderSummary={setShowOrderSummary}
                  mobileSelectedValue={value}
                  planNumber={index}
                  off={plan.off}
                  setSelectedPlanDetails={setSelectedPlanDetails}
                  price={plan.price}
                />
              ))}
            </div>
          </div>
        ) : null}

        {showOrderSummary ? (
          <div className="flex items-center justify-center">
          <OrderSummary
            {...selectedPlanDetails as any}
            email={email}
            isPayLaterEnabled={isEnabled}
              setShowOrderSummary={setShowOrderSummary}
            />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Subscription
