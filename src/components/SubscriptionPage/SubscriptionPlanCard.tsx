import { Button } from "@components/Button"
import { CheckSquareIcon } from "@assets/icons/CheckSquare"

const SubscriptionPlanCard = ({
  price,
  planName,
  planDescription,
  planBenefits,
  setShowOrderSummary,
  mobileSelectedValue,
  planNumber,
  off,
  setSelectedPlanDetails,
  id,
  noOfMonths,
}: {
  price: number;
  planName: string;
  planDescription: string;
  planBenefits: string[];
  setShowOrderSummary: (show: boolean) => void;
  mobileSelectedValue: number;
  planNumber: number;
  off: number;
  setSelectedPlanDetails: (plan: any) => void;
  id: number;
  noOfMonths: number;
}) => {

  return (
    <div
      className={`lg:h-full min-w-[312px] w-full flex flex-col rounded-2xl border border-[var(--border-blue-light)] bg-white ${mobileSelectedValue - 1 === planNumber ? "block" : "hidden"} md:flex`}
    >
      <div className="flex flex-col gap-4 pt-[32px] px-[32px]">
        <div className="flex items-center gap-3">
          <h6 className="text-sm md:text-xl font-semibold text-[--text-light-gray]">
            {planName} <span className={`${planName === "Yearly" ? "bg-red-500 text-white p-1 rounded-md" : ""}`}>{planName === "Yearly" ? off : ""}</span>
          </h6>
        </div>
        <p className="text-xs md:text-base">{planDescription}</p>
        <div className="flex items-center gap-2.5">
          <div className="flex items-start gap-1">
            <span className={`text-3xl md:text-5xl line-through ${planName === "Yearly" ? "flex text-gray-400" : "hidden"}`}>
            ₹ {price}
            </span>
            <span className="text-3xl md:text-5xl text-[var(--text-theme)]">
            ₹ {price}
            </span>
          
            <span className="text-3xl text-[var(--text-theme)]">{`/mo`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4  p-[32px]">
        {planBenefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckSquareIcon className="h-7 w-7 text-[var(--text-theme)]" />
            <p className="text-xs md:text-base">{benefit}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-auto justify-center rounded-b-2xl px-[32px] py-[38px] bg-[var(--bg-blue-light)]">
        <Button
          className="w-full "
          onClick={() => {
            setSelectedPlanDetails({
              price,
              planName,
              planDescription,
              planBenefits,
              planNumber,
              id,
              pricePerMonth: price,
              noOfMonths,
            })
            setShowOrderSummary(true)
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default SubscriptionPlanCard
