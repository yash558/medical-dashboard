import {
  getOwnDetailsFailed,
  getOwnDetailsSuccess,
  getOwnDetailsLoading,
  setOwnDetailsLogout,
  getPriceLoading,
  getPriceSuccess,
  getPriceFailure,
} from "@redux/slices/profileSlice"
import { getOwnDetails } from "@services/profile/getOwnDetails"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { notify } from "src/utils/notify"
import getErrorStatement from "src/utils/getErrorStatement"
import { getPrice } from "@services/profile/getPrice"
const useProfile = () => {
  const dispatch = useDispatch()
  const handleGetOwnDetails = useCallback(async () => {
    try {
      dispatch(getOwnDetailsLoading())
      const response = await getOwnDetails()
      dispatch(getOwnDetailsSuccess(response.data?.data))
    } catch (error) {
      dispatch(getOwnDetailsFailed())
      console.log(error)
    }
  }, [dispatch])

  const handleOwnDetailsLogout = useCallback(async () => {
    try {
      dispatch(setOwnDetailsLogout())
    } catch (error) {
      notify(getErrorStatement(error))
      console.log(error)
    }
  }, [dispatch])

  const handleGetPrice = useCallback(async () => {
    try {
      dispatch(getPriceLoading())
      const response = await getPrice()
      dispatch(getPriceSuccess(response.data))
    } catch (error) {
      dispatch(getPriceFailure())
      console.log(error)
    }
  }, [dispatch])

  return {
    handleGetOwnDetails,
    handleOwnDetailsLogout,
    handleGetPrice,
  }
}

export default useProfile
