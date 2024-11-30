import useProfile from "@hooks/useProfile"
import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const {handleGetOwnDetails} = useProfile();
  const { ownDetails } = useSelector((state : RootState) => state.profile)

   useEffect(()=>{
    if(!ownDetails){
        handleGetOwnDetails()
    }
   },[])

    return ownDetails ? children : <Navigate to="/" replace />
}

export default ProtectedRoute
