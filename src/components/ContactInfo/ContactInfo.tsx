import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import SmsIcon from "@assets/icons/sms"; 

const ContactInfo = ({
  control,
  errors,
}: {
  control: Control<any>;
  errors: FieldErrors<any>;
}) => {
  const [issueType, setIssueType] = useState<string | null>(null);

  return (
    <form className="bg-white shadow-md rounded-2xl p-8 md:max-w-xl max-w-md mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-[#005BB2] mb-2">Get in touch</h2>
      <p className="text-sm text-gray-600 mb-6">
        Our friendly team would love to hear from you.
      </p>

      {/* First and Last Name */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="firstName"
          >
            First Name*
          </label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="firstName"
                placeholder="First Name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
              />
            )}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex-1">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="lastName"
          >
            Last Name*
          </label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
              />
            )}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Email*
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <SmsIcon />
          </span>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="p-3 pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
              />
            )}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Contact */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
          Contact*
        </label>
        <div className="flex gap-2">
          <select
            className="w-1/4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
            defaultValue="IN"
          >
            <option value="IN">IN</option>
            <option value="US">US</option>
          </select>
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                id="contact"
                placeholder="+91 0000000000"
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
              />
            )}
          />
        </div>
        {errors.contact && (
          <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="message"
        >
          Message
        </label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              id="message"
              placeholder="Enter a description..."
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
              rows={4}
            />
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#005BB2] text-white py-3 rounded-md text-sm font-medium hover:bg-[#004499] focus:outline-none focus:ring-2 focus:ring-[#005BB2]"
      >
        SEND
      </button>
    </form>
  );
};

export default ContactInfo;
