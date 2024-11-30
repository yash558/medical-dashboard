import SmsIcon from "@assets/icons/sms";
import React, { useState } from "react";

const ReportConcernForm: React.FC = () => {
  const [issueType, setIssueType] = useState("TECHNICAL");

  return (

      <form className="bg-white shadow-md rounded-2xl p-6  md:max-w-xl max-w-md">
        <h2 className="text-3xl font-normal text-[#005BB2] mb-4">Report Concern</h2>
        <p className="text-sm text-gray-600 mb-6">
          Our friendly team would love to hear from you.
        </p>
    <div className="flex gap-4 mb-4">
        <div className="">
          <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email*
          </label>
          <div className="relative">
  <span className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
   <SmsIcon /> 
  </span>
  <input
    type="email"
    id="email"
    placeholder="example@gmail.com"
    className=" p-2 w-full pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>

        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700 mb-2">Issue Type</span>
          <div className="flex flex-wrap gap-2">
            {["TECHNICAL", "USABILITY", "VISUAL", "OTHERS"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setIssueType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  issueType === type
                    ? "bg-[#005BB2] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter a description..."
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#005BB2] text-white py-2 rounded-md text-sm font-medium hover:bg-[#005BB2] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          SEND
        </button>
      </form>
   
  );
};

export default ReportConcernForm;
