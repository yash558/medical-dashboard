import { Route, Routes, Navigate } from "react-router"
import "./App.css"
import LoginPage from "@containers/LoginPage/LoginPage"

import OtherAppsPage from "@containers/OtherAppsPage/OtherAppsPage"
import DashBoardPage from "@containers/DashBoardPage/DashBoardPage"
import ContactPage from "@containers/ContactPage/ContactPage"
import ReportPage from "./containers/ReportPage/ReportPage"
import SignUpPage from "@containers/SignUpPage/SignUpPage"
import ForgotPasswordPage from "@containers/ForgotPassword/ForgotPasswordPage"
import MyAccountPage from "@containers/MyAccountPage/MyAccountPage"
import SubscriptionPage from "@containers/SubscriptionPage/SubscriptionPage"
import Setup from "@containers/SetUp/Setup"
import TestPage from "@containers/TestPage/TestPage"
import TestsPage from "@containers/TestsPage/Tests"
import Chart from "@containers/chart/Chart"
import PdfView from "@containers/PdfView/PdfView"
import { Provider } from "react-redux"
import { store } from "@redux/store"


const App: React.FC = () => {
    return (
      <Provider store={store}>
        <Routes>
        <Route path="/" element={<Navigate to="/sign-in?onboarding=true" />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/pdf-viewer" element={<PdfView />} />
        <Route path="/other-apps" element={<OtherAppsPage />} />
      <Route path="/tests" element={<TestPage />} />
      <Route path="/other-tests" element={<TestsPage />} />


      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/chart" element={<Chart />} />
  
        <Route path="/other-tests" element={

          <TestsPage />

        } />





        <Route path="/vision-therapy" element={

          <Chart />

        } />
        <Route path="/contrast-sensitivity" element={

          <Chart />

        } />
        <Route path="/color-sensitivity" element={

          <Chart />

        } />
        <Route path="/color-vision" element={

          <Chart />

        } />
        <Route path="/visual-acuity" element={

          <Chart />

        } />
        <Route path="/dashboard" element={

          <DashBoardPage />

        } />
    
        <Route path="/my-account" element={

          <MyAccountPage />

        } />
    
        <Route path="/contact" element={

          <ContactPage />

        } />
        <Route path="/report" element={

          <ReportPage />

        } />
        <Route path="/subscribe" element={

          <SubscriptionPage />

        } />

      </Routes>
    </Provider>
  )
}

export default App
