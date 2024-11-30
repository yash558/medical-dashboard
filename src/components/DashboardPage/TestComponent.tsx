import React from "react";
import ArrowInCircleIcon from "@assets/icons/arrowInCircle";
import OtherApplicationsIcon from "@assets/icons/otherApplications";
import { Link } from "react-router-dom";
import PdfPreview from "@assets/icons/pdfpreview.svg";
import wave from "@assets/Common/wave.svg";

const TestsComponent: React.FC = () => {
  return (
    <div
      className="p-6 flex flex-col rounded-3xl w-full bg-[--pure-white] overflow-x-hidden shadow-md"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right", // Ensures the image is placed at the end
        backgroundSize: "contain", // Ensures the image fits within its container
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <OtherApplicationsIcon />
          <div className="font-bold text-sm text-[--text-light-gray] tracking-widest">
            TESTS
          </div>
        </div>
        <div>
          <Link to="/tests">
            <ArrowInCircleIcon style={{ color: "var(--primary-blue)" }} />
          </Link>
        </div>
      </div>

      {/* Test Cards and Chart */}
      <div className="mt-4">
        {/* Test Cards */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:overflow-hidden overflow-x-scroll no-scrollbar">
          {[1, 2].map((item: number, index: number) => (
            <div
              key={index}
              className="rounded-2xl flex flex-col items-center justify-center min-w-[10rem] md:min-w-0 gap-2 px-4 py-6 bg-[--primary-blue-light] shadow-sm relative"
            >
              <img
                src={PdfPreview}
                alt="Pdf Preview"
                className="md:h-[5rem] h-[7rem] rounded-tl-2xl w-auto absolute md:top-[0] md:right-0 top-[1rem] right-[1rem]"
              />
              <div className="font-semibold mt-16 md:mt-14 text-sm text-[--text-gray] md:text-center text-start">
                Vergence Test
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestsComponent;
