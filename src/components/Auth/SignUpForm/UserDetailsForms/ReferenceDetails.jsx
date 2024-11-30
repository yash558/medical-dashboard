// react hook form
import { Controller } from "react-hook-form";
// components
import { Button } from "@components/Button";
import { InputWithLabel } from "@components/Form";
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";

export const ReferenceDetails = ({ control, errors }) => {
  const currentFormField = ["referenceNumber", "eye"];

  const currentFormErrors = Object.keys(errors).filter((key) =>
    currentFormField.includes(key)
  );

  const isButtonDisabled = Object.keys(currentFormErrors)?.length > 0;
  return (
    <>
      {/* Reference no. */}
      <InputWithLabel
        labelElement={
          <div className="flex items-center">
            Reference Number (Optional)
            <Tooltip
              title="Only enter if already consulted with a doctor"
              arrow
              placement="top"
            >
              <InfoIcon className="ml-2 !w-4 !h-4 cursor-pointer" />
            </Tooltip>
          </div>
        }
        name="referenceNumber"
        rules={{
          maxLength: {
            value: 10,
            message: "Reference Number must be 10 characters",
          },
          minLength: {
            value: 10,
            message: "Reference Number must be 10 characters",
          },
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: "Reference Number must be alphanumeric",
          },
        }}
        type="text"
        placeholder="0000000000"
        control={control}
        errors={errors}
        inputClassName="tracking-[12.5px]"
      />

      {/* Eye */}
      <InputWithLabel
        label="Eye"
        name="eye"
        rules={{
          required: "Eye is required",
        }}
        type="text"
        control={control}
        errors={errors}
        customInput={
          <div className="relative flex items-center rounded-md">
            <Controller
              control={control}
              name="eye"
              rules={{
                required: "referenceNumber is required",
              }}
              render={({ field: { onChange, ref } }) => (
                <div className="flex items-center w-full border border-[var(--border-secondary)] rounded-lg">
                  <div className="flex items-center w-1/3 gap-2 py-2.5 px-6 border-r">
                    <input
                      type="radio"
                      id="left"
                      name="eye"
                      value="left"
                      onChange={onChange}
                      ref={ref}
                      className="h-4 w-4"
                    />
                    <label className="text-sm font-semibold" htmlFor="left">
                      Left
                    </label>
                  </div>

                  <div className="flex items-center w-1/3 gap-2 py-2.5 px-6 border-r">
                    <input
                      type="radio"
                      id="both"
                      name="eye"
                      value="both"
                      onChange={onChange}
                      ref={ref}
                      className="h-4 w-4"
                    />
                    <label className="text-sm font-semibold" htmlFor="both">
                      Both
                    </label>
                  </div>
                  <div className="flex items-center w-1/3 gap-2 py-2.5 px-6">
                    <input
                      type="radio"
                      id="right"
                      name="eye"
                      value="right"
                      onChange={onChange}
                      ref={ref}
                      className="h-4 w-4"
                    />
                    <label className="text-sm font-semibold" htmlFor="right">
                      Right
                    </label>
                  </div>
                </div>
              )}
            />
          </div>
        }
        isRequired
      />

      <Button
        variant="primary"
        type="submit"
        size="md"
        disabled={isButtonDisabled}
      >
        Sign Up
      </Button>
    </>
  );
};
