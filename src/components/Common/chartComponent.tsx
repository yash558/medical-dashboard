
import OtherApplicationsIcon from "@assets/icons/otherApplications";

import Image1 from "@assets/Common/chart1.svg"

import Image3 from "@assets/Common/chart3.svg"
import VisionIcon from "@assets/icons/vision";
import ColorVisionIcon from "@assets/icons/ColorVision";
import ContrastSensitivityIcon from "@assets/icons/device";
import VisualIcon from "@assets/icons/visual";


const ChartsComponent = () => {
  const charts = [
    { title: "Vision Therapy", icon: <VisionIcon stroke="#fff" />, image: Image1 },
    { title: "Contrast Sensitivity", icon: <ContrastSensitivityIcon stroke="#fff" />, image: Image3 },
    { title: "Color Sensitivity", icon: <ColorVisionIcon stroke="#fff" />, image: Image1 },
    { title: "Visual Acuity", icon: <VisualIcon stroke="#fff" />, image: Image3 },
    { title: "Color Vision", icon: <ColorVisionIcon stroke="#fff" />, image: Image1 },
  ];

  return (
    <div className="p-4 flex flex-col gap-6 rounded-3xl bg-[--pure-white] overflow-x-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <OtherApplicationsIcon />
          <div className="font-bold text-sm text-[--text-light-gray] tracking-widest uppercase">
            Charts
          </div>
        </div>
        {/* <div>
          <Link to="/other-apps">
            <ArrowInCircleIcon />
          </Link>
        </div> */}
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="flex gap-4 max-w-full overflow-x-scroll no-scrollbar">
        {charts.map((chart, index) => (

          <div className="rounded-xl bg-[--bg-theme-secondary] p-4 w-[12rem] h-[14rem] shadow-md flex flex-col justify-between relative" key={index}>
            {/* Title and Icon */}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-sm text-[--text-gray]">
                {chart.title}
              </div>
              <div className="w-10 h-10 rounded-full bg-[--pure-white] flex items-center justify-center shadow">
                {chart.icon}
              </div>
            </div>

            {/* Overlapping Images */}
            <div className="absolute bottom-2 left-4 flex">
              <img
                src={chart.image} // Replace with your actual image path
                alt="Card Background"
                className="w-[7rem] h-[6rem] object-cover rounded-lg shadow-md transform translate-x-[10%]"
              />
              <img
                src={chart.image} // Replace with your actual image path
                alt="Card Foreground"
                className="w-[7rem] h-[6rem] object-cover rounded-lg shadow-md -translate-x-[50%] -translate-y-[10%] md:w-[10rem] md:h-[8rem]"
              />
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ChartsComponent;
