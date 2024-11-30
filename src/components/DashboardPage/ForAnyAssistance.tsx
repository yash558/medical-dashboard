import { Link } from "react-router-dom";
import ArrowInsideCircleIcon from "@assets/icons/arrowInsideCircle";

const ForAnyAssistance: React.FC<{ headingText: string, linkTo: string, backgroundColor: string }> = ({ headingText, linkTo, backgroundColor }) => {
  return (
    <div
      className="p-8 rounded-3xl shadow-md"
      style={{ backgroundColor: backgroundColor }}

    >
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg text-[#005BB2] font-semibold">{headingText}</h3>
          <Link to={linkTo}>
            <ArrowInsideCircleIcon />
          </Link>
        </div>
        {/* Uncomment this if you want to show a description */}
        {/* <h6 className="text-sm text-gray-600">
          Orbsway is ready to help you. Contact Us with your concerns anytime.
        </h6> */}
      </div>
    </div>
  );
};

export default ForAnyAssistance;
