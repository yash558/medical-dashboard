import { UserSquareIcon } from "@assets/icons"
import NotesIcon from "@assets/icons/notes"
import { Button } from "@components/Button"
import { ViewPatientNotesIcon } from "@assets/icons/ViewPatientNotes"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import formatDateFromISOString from "src/utils/formatDate"
import usePatient from "@hooks/usePatient"
import { useState } from "react"

const Notes = () => {
  const { patient, isAddCommentLoading } = useSelector((state) => state.patient)
  const [searchParams] = useSearchParams()
  const { handleAddComment, handleGetSinglePatient } = usePatient()
  const [comment, setComment] = useState("")
  const patientId = searchParams.get("_id")
  const patientData = patient?.data[0]

  const onAddCommentSuccess = () => {
    handleGetSinglePatient({ _id: patientId })
    setComment("")
  }

  const updateCommentInput = (event) => {
    setComment(event.currentTarget.value)
  }
  const onAddCommentSubmit = () => {
    if (comment !== "") {
      handleAddComment(
        {
          patientId,
          comment,
        },
        onAddCommentSuccess
      )
    }
  }

  return (
    <>
      <div className="md:py-8 md:px-10 md:bg-[--pure-white] rounded-2xl flex flex-col gap-4">
        <div className="flex gap-6 justify-between">
          <div className="w-full max-w-[53.37rem] flex flex-col gap-6">
            <div className="gap-2 flex items-center mx-4 md:mx-0">
              <UserSquareIcon className="h-6 w-6 text-[var(--text-theme)]" />
              <div className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                DAN LEWY
              </div>
            </div>

            <div className="py-10 px-8 rounded-2xl bg-[--primary-blue-light] flex flex-col gap-4 max-h-[22.5rem] overflow-y-auto theme-scrollbar">
              <div className="gap-2 flex items-center">
                <NotesIcon stroke="var(--primary-blue)" />
                <div className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                  NOTE AND COMMENT HISTORY
                </div>
              </div>

              {patientData?.commentHistory?.map((commentDetails) => {
                return (
                  <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div className="text-sm font-bold text-[--quaternary-black] min-w-max">
                      {formatDateFromISOString(commentDetails.created_at).date}
                    </div>
                    <div className="p-4 rounded-2xl bg-[--pure-white] h-[7.18rem] grow overflow-y-auto theme-scrollbar">
                      {commentDetails.comment}
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className="py-10 px-8 md:p-0 bg-[--primary-blue-light]
              md:bg-[transparent] flex flex-col gap-4 rounded-2xl"
            >
              <div className="md:py-4 md:px-8 rounded-2xl bg-[--primary-blue-light] flex flex-col gap-4">
                <div className="gap-2 flex items-center">
                  <NotesIcon stroke="var(--primary-blue)" />
                  <div className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                    ADD NEW COMMENT
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-16">
                  <div className="hidden md:block text-sm font-bold text-[#BCBEC0] min-w-max">
                    24-06-2024
                  </div>
                  <textarea
                    onChange={updateCommentInput}
                    className="p-4 rounded-2xl bg-[--pure-white] h-[7.18rem] grow md:border border-[--primary-blue]"
                    placeholder="type your comment here"
                    value={comment}
                  />
                </div>
              </div>
              <Button
                variant="primary"
                className="w-[7.87rem] ml-auto"
                loading={isAddCommentLoading}
                type="button"
                onClick={onAddCommentSubmit}
                disabled={isAddCommentLoading || comment === ""}
              >
                Submit
              </Button>
            </div>
          </div>

          <ViewPatientNotesIcon className="min-w-[22rem] hidden 3xl:block" />
        </div>
      </div>
    </>
  )
}

export default Notes
