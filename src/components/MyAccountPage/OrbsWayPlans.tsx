import { StarIcon } from "@assets/icons";
import FilterIcon from "@assets/icons/filterIcon";
import useProfile from "@hooks/useProfile";
import { useEffect } from "react";

interface OrbsWayPlanHistoryItem {
  billingCycle: string;
  startDate: string;
  endDate: string;
}

interface OrbsWayPlan {
  planCode?: string;
  startDate?: string;
  expiry?: string;
  renewalDate?: string;
  history?: OrbsWayPlanHistoryItem[];
}

interface OrbsWayPlansProps {
  data?: {
    orbsWayPlan?: OrbsWayPlan;
  };
}

const OrbsWayPlans: React.FC<OrbsWayPlansProps> = ({ data }) => {
  const { handleGetPrice } = useProfile();

  useEffect(() => {
    handleGetPrice();
  }, [handleGetPrice]);

  const planCodes: Record<string, string> = {
    OY0240003: "Quarterly",
    OY0240006: "Half yearly",
    OY0240012: "Yearly",
  };

  const getPriceResponse = data?.orbsWayPlan;

  return (
    <div className="bg-white border border-[#D6EBFF] rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <StarIcon className="h-6 w-6 text-[var(--text-theme)]" strokeWidth="2" />
        <h2 className="text-sm font-bold text-[--text-light-gray] tracking-wide">
          ORBSWAY PLANS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Status</span>
            <span className="text-sm text-gray-800 font-normal">Inactive</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Plans</span>
            <span className="text-sm text-gray-800 font-normal">
              {planCodes[getPriceResponse?.planCode || ""] || "N/A"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Subscription Start Date
            </span>
            <span className="text-sm text-[#005BB2] font-normal">
              {getPriceResponse?.startDate || "N/A"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Subscription End Date
            </span>
            <span className="text-sm text-[#005BB2] font-normal">
              {getPriceResponse?.expiry || "N/A"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Renewal Date</span>
            <span className="text-sm text-[#005BB2] font-normal">
              {getPriceResponse?.renewalDate || "N/A"}
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#F8FAFF] p-4 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-blue-600">History</h3>
        <button className="text-blue-600 hover:text-blue-800">
          <FilterIcon />
        </button>
      </div>
      <div className="overflow-x-auto">
  <div className="max-h-36 overflow-y-auto bg-white  scrollbar-thin scrollbar-thumb-[#005BB2] scrollbar-track-[#F0F4FA] rounded-lg shadow-inner">
    {getPriceResponse?.history && getPriceResponse?.history.length > 0 ? (
      <table className="w-full text-left bg-white">
        <thead className="bg-[#F8FAFF] text-gray-500 text-sm sticky top-0 z-10">
          <tr>
            <th className="py-2 px-4">Billing Cycle</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
          </tr>
        </thead>
        <tbody>
          {getPriceResponse?.history.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-none"
            >
              <td className="py-2 px-4 text-gray-700 text-sm">
                {item.billingCycle}
              </td>
              <td className="py-2 px-4 text-gray-500 text-sm">
                {item.startDate}
              </td>
              <td className="py-2 px-4 text-gray-500 text-sm">
                {item.endDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="text-gray-500 text-sm p-4">No history available</p>
    )}
  </div>
</div>


    </div>
      </div>
    </div>
  );
};

export default OrbsWayPlans;
