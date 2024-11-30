// components
import DocumentUploadIcon from "@assets/icons/documentUpload"
import UploadFileIcon from "@assets/icons/uploadFileClose"
import { Button } from "@components/Button"
import { InputWithLabel } from "@components/Form"
import { useState } from "react"
import { Controller } from "react-hook-form"
import { useSelector } from "react-redux"

export const DoctorInfo = ({ control, errors, setValue }) => {
  const currentFormField = ["instituteName,indentity"]
  const [fileDetails, setFileDetails] = useState(null)
  const [showFileSizeError, setShowFileSizeError] = useState(false)
  const currentFormErrors = Object.keys(errors).filter((key) =>
    currentFormField.includes(key)
  )
  const authState = useSelector((state) => {
    return state.auth
  })

  const isButtonDisabled = Object.keys(currentFormErrors)?.length > 0
  return (
    <>
      <InputWithLabel
        label="Institute name"
        name="instituteName"
        rules={{
          required: "Institute name is required",

          minLength: {
            value: 1,
            message: "Institute name must be at least 1 character",
          },
        }}
        placeholder="Institute name"
        control={control}
        errors={errors}
        isRequired
        type="text"
      />

      {/* Pincode */}
      {/* <InputWithLabel
        label="Pincode"
        name="institutePincode"
        rules={{
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: "Pincode must be alphanumeric",
          },
          minLength: {
            value: 1,
            message: "Pincode must be at least 1 character",
          },
          maxLength: {
            value: 30,
            message: "Pincode must be at most 30 characters",
          },
        }}
        type="text"
        placeholder="500075"
        control={control}
        errors={errors}
        inputClassName="tracking-[12.5px] uppercase"
        containerClassName="w-1/2"
      /> */}

      {fileDetails ? (
        <div className="flex flex-col gap-2">
          <div className="text-sm text-[#344054] font-medium">
            identity proof*
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-[#ECF6FF] rounded-xl">
            <div>
              <div className="text-xs text-[#0B0B0B] font-medium mb-2">
                {fileDetails.name}
              </div>
              <div className="text-xs text-[#6D6D6D]">
                {(fileDetails.size / (1024 * 1024)).toFixed(2)} mb
              </div>
            </div>
            <button
              onClick={() => {
                setFileDetails(null)
                setShowFileSizeError(false)
                setValue("files", undefined)
              }}
            >
              <UploadFileIcon />
            </button>
          </div>
        </div>
      ) : (
        <InputWithLabel
          label="identity"
          name="files"
          rules={{
            required: "identity is required",
          }}
          type="text"
          control={control}
          errors={errors}
          customInput={
            <>
              <div className="relative flex items-center rounded-md">
                <Controller
                  control={control}
                  name="files"
                  rules={{
                    required: "identity is required",
                  }}
                  render={({ field: { onChange, ref } }) => (
                    <div className="w-full">
                      <div className="flex items-center justify-center w-full border border-[--primary-blue] h-20 gap-2 rounded-lg">
                        <div className="flex items-center gap-2 py-2.5 px-6">
                          <input
                            type="file"
                            id="identity"
                            name="identity"
                            onChange={(event) => {
                              const fileSize = event.currentTarget.files[0].size
                              const fileSizeAllowedInBytes = 1024 * 1024 * 5
                              if (fileSize > fileSizeAllowedInBytes) {
                                setShowFileSizeError(true)
                                return
                              }
                              setFileDetails({
                                name: event.currentTarget.files[0].name,
                                size: event.currentTarget.files[0].size,
                              })
                              onChange(event.currentTarget.files)
                            }}
                            ref={ref}
                            className="h-4 w-0"
                          />
                          <DocumentUploadIcon />
                          <label
                            className="bg-[#C4E2FF] h-8 flex items-center px-4 py-2 rounded-[1.8rem] text-xs font-bold text-[--primary-blue] tracking-widest uppercase"
                            htmlFor="identity"
                          >
                            click to upload
                          </label>
                        </div>
                      </div>
                      <div className="text-sm text-[#475467] mt-2">
                        File size should be less than 5 mb
                      </div>
                    </div>
                  )}
                />
              </div>
              {showFileSizeError && !fileDetails ? (
                <div className="text-xs text-[--text-error]">
                  file size exceeded 5 mb
                </div>
              ) : null}
            </>
          }
          isRequired
        />
      )}

      <Button
        variant="primary"
        type="submit"
        size="md"
        disabled={isButtonDisabled}
        loading={authState.isSignupLoading}
      >
        SEND EMAIL VERIFICATION
      </Button>
    </>
  )
}
