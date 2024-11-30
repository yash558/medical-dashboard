import { Button } from "@components/Button"
import { CheckSquareIcon } from "@assets/icons"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import usePostPaid from "@hooks/usePostPaid"
import usePatient from "@hooks/usePatient"
import formatDateFromISOString from "src/utils/formatDate"
const OrderSummary = ({
  price,
  planName,
  planDescription,
  planBenefits,
  email,
  isPayLaterEnabled,
  id,
  pricePerMonth,
  setShowOrderSummary,
  noOfMonths,
}: {
  price: number
  planName: string
  planDescription: string
  planBenefits: string[]
  email: string
  isPayLaterEnabled: string
  id: string
  pricePerMonth: number
  setShowOrderSummary: (value: boolean) => void
  noOfMonths: number
}) => {
  const navigate = useNavigate()
  const { isAddPostPaidLoading } = useSelector((state: any) => state.postPaid)
  const { isFindPatientLoading } = useSelector((state: any) => state.patient)
  
  const { handleAddPostPaid } = usePostPaid()
  const { handleFindPatient } = usePatient()

  const updatePayLater = () => {
    handleFindPatient({ email }, (data: any) => {
      handleAddPostPaid({ _id: data?.data?.patientId, orderId: id }, () => {
        navigate("/manage-patient-vision")
      })
    })
  }
  const checkout = () => {
    navigate(`/subscribe/checkout?email=${email}&planId=${id}`)
  }

  const selectAnotherPlan = () => {
    setShowOrderSummary(false)
  }

  const getSubscriptionDates = () => {
    let startingDate = formatDateFromISOString(new Date()) as any
    let endingDate = new Date() as any

    endingDate.setMonth(endingDate.getMonth() + noOfMonths)
    startingDate =
      startingDate?.specificMonthName.substr(0, 3) +
      " " +
      startingDate?.day +
      " " +
      startingDate?.year

    endingDate = formatDateFromISOString(endingDate) as any
    endingDate =
      endingDate?.specificMonthName.substr(0, 3) +
      " " +
      endingDate?.day +
      " " +
      endingDate?.year
    return startingDate + " - " + endingDate
  }

  return (
<div className="bg-[--pure-white] p-3 md:px-10  md:pt-8 md:pb-14 rounded-2xl flex gap-4 md:gap-20 mx-auto flex-col w-full xl:flex-row items-center justify-center ">
  <div className="relative px-4 pt-4 md:p-0 w-full">
    <div className="bg-[--primary-blue-light] rounded-xl md:hidden absolute top-0 left-0 right-0 h-[10.5rem]"></div>
    <div className="flex justify-between mb-5 relative z-10">
      <div className="text-sm md:text-xl text-[--text-light-gray] font-semibold">
        Plan selected
      </div>
      <button
        className="text-xs text-[--primary-blue] md:text-sm font-bold tracking-widest"
        onClick={selectAnotherPlan}
      >
        select another plan
      </button>
    </div>

    <div className="rounded-2xl border max border-[var(--border-blue-light)] bg-[--pure-white] md:bg-[--primary-blue-light] max-w-5xl relative z-10">
      <div className="flex flex-col gap-2 md:gap-4 px-6 py-8 pb-4 md:p-8 md:pb-0">
        <div className="flex items-center gap-3">
          <h6 className="text-sm md:text-xl font-semibold text-[--text-light-gray]">
            {planName}
          </h6>
        </div>
        <p className="text-xs md:text-base">{planDescription}</p>
        <div className="flex items-center gap-2.5">
          <div className="flex items-start gap-1">
            <span className="text-xl md:text-5xl text-[var(--text-light-gray)] font-semibold">
              {pricePerMonth.toFixed(2)}
            </span>
            <span className="text-xl md:text-3xl text-[var(--text-light-gray)] font-semibold">{`/mo`}</span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-4 p-[32px]">
        {planBenefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckSquareIcon className="h-7 w-7 text-[var(--text-theme)]" />
            <p className="text-xs md:text-base">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-5  w-full max-w-xl">
    <div className="text-base md:text-xl text-[--text-light-gray] font-semibold">
      Order Summary
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-base text-[--text-light-gray] font-medium">
        Plan selected: {planName}
      </div>
      <div className="text-xs tex-[--text-light-gray] flex gap-2">
        <div>{planName}</div>
        <div>{getSubscriptionDates()}</div>
        <div>
          ( {pricePerMonth.toFixed(2)} x{" "}
          {noOfMonths} = {price})
        </div>
      </div>
    </div>
    <div className="border border-[#BCBEC0]"></div>
    <div className="flex flex-col gap-8">
      <div className="text-base md:text-xl text-[--text-light-gray] font-semibold">
        Break down
      </div>
      <div className="text-base text-[--text-light-gray] font-medium flex flex-col gap-2">
        <div className="flex justify-between">
          <div>Subscription amount:</div>
          <div className="text-[--primary-blue]">₹{price}</div>
        </div>
        <div className="flex justify-between">
          <div>Convenience charges:</div>{" "}
          <div className="text-[#B90022]">0</div>
        </div>
      </div>

      <div className="flex justify-between text-base md:text-xl text-[--primary-blue] font-semibold">
        <div>Total:</div>
        <div>₹{price}</div>
      </div>
    </div>

    <Button
      disabled={isAddPostPaidLoading || isFindPatientLoading}
      variant="primary"
      onClick={checkout}
      className="text-base font-medium mt-auto !tracking-widest"
    >
      PAY {price}
    </Button>
    {isPayLaterEnabled === "true" ? (
      <Button
        disabled={isAddPostPaidLoading || isFindPatientLoading}
        loading={isAddPostPaidLoading || isFindPatientLoading}
        onClick={updatePayLater}
        variant="transparent"
        className="text-[--primary-blue] text-base !font-bold !tracking-widest border border-[--border-secondary]"
        type="submit"
        size="md"
      >
        PAY LATER
      </Button>
    ) : null}
  </div>
</div>

  )
}

export default OrderSummary
