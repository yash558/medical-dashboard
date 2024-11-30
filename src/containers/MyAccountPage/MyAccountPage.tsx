import ArrowSquareLeftIcon from "@assets/icons/arrowSquareLeft"
import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import ProfileDetails from "@components/MyAccountPage/ProfileDetails"
import styles from "./MyAccountPage.module.css"
import InstituteDetails from "@components/MyAccountPage/InstituteDetails"
import LocationDetails from "@components/MyAccountPage/LocationDetails"
import OrbsWayPlans from "@components/MyAccountPage/OrbsWayPlans"
import { useSelector } from "react-redux"
import GoBack from "@components/Common/GoBack"
import orbsWayImage from "@assets/Common/myAccountBg.svg"

const MyAccountPage = () => {
  const { ownDetails } = useSelector((state: any) => {
    return state.profile
  })
  const mockProfileSlice = {
    profile: {
      ownDetails: {
        name: "Dr Dan Lewy",
        email: "johndoe@example.com",
        gender: "Male",
        contact: "+1-234-567-8901",
        myReferenceNumber: "1234567890",
        instituteDetails: {
          instituteName: "Sample Institute",
          pincode: "110001",
        },
        created_at: "2024-11-18T10:00:00Z",
        access: {
          accountVerified: {
            isVerified: true,
            verifiedOn: "2024-11-19T09:30:00Z",
          },
          visionPostpaid: {
            isViewable: true,
          },
        },
        details: {
          pincode: "110001",
          province: "Delhi",
          country: "India",
          address: "123 Main Street",
        },
        orbsWayPlan: {
          planName: "Premium Plan",
          expiry: "2025-12-31",
          price: 100,
          renewalDate: "2025-12-01",
          startDate: "2024-01-01",
          planCode: "OY0240003",
          features: ["Unlimited Access", "Priority Support"],
          status: "Inactive",
          history: [
            {
              billingCycle: "Monthly",
              startDate: "2024-01-01",
              endDate: "2024-01-31",
            },
            {
              billingCycle: "Yearly",
              startDate: "2024-01-01",
              endDate: "2024-12-31",
            },
            {
              billingCycle: "Quarterly",
              startDate: "2024-01-01",
              endDate: "2024-03-31",
            },
            {
              billingCycle: "Quarterly",
              startDate: "2024-01-01",
              endDate: "2024-03-31",
            },
            {
              billingCycle: "Quarterly",
              startDate: "2024-01-01",
              endDate: "2024-03-31",
            },
          ],
        },
      },
    },
  }
  const { isViewable } = ownDetails?.access?.visionPostpaid || {}

  return (
    <NavigationsPage defaultBackgroundClassName="">
      <PageWrapper className={styles.myAccountPage + "p-0"}>
        <div className="flex flex-col gap-5 md:gap-10 items-center justify-center">
          <div className="flex md:gap-2 flex-col md:hidden">
            <GoBack className="mb-4 md:hidden">
              <ArrowSquareLeftIcon />
            </GoBack>
            {/* <h1 className="text-sm md:text-2xl 3xl:text-4xl uppercase md:normal-case font-bold text-[--primary-blue] md:text-[--quaternary-black] md:font-normal">
              My Account
            </h1>
            <p className="hidden md:block text-base 3xl:text-xl font-semibold text-[--text-light-gray]">
              One Place Solution for all your needs, Try other An overview of
              account details
            </p> */}
          </div>

          <div className="flex flex-row gap-4 3xl:flex-row ">
            <div className="grid grid-cols-1 gap-4 w-full">
              <ProfileDetails data={mockProfileSlice.profile.ownDetails} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[984px]">
                <LocationDetails data={mockProfileSlice.profile.ownDetails} />
                <InstituteDetails data={mockProfileSlice.profile.ownDetails} />
              </div>
              <OrbsWayPlans data={mockProfileSlice.profile.ownDetails} />
            </div>
            <div className="hidden md:block absolute top-[40%] right-[5%]">
              <img
                src={orbsWayImage}
                alt="orbs way"
                className="w-[500px] h-[500px]"
              />
            </div>
            {/* {isViewable ? <MyPostPayments data={ownDetails} /> : null} */}
          </div>
          {/* <div className="bg-white border  border-[#D6EBFF] md:flex hidden w-[300px] rounded-2xl px-6 py-4 shadow-sm absolute top-0 right-0">
            <div className="flex items-start flex-col gap-4">
              <div className="flex items-center justify-start gap-4">
                <StarIcon
                  className="h-6 w-6 text-[var(--text-theme)]"
                  strokeWidth="2"
                />
                <h2 className="text-sm font-bold text-[--text-light-gray] tracking-wide">
                  ORBSWAY PLANS
                </h2>
              </div>
              <Button className="w-full">BUY PLAN</Button>
            </div>
          </div> */}
        </div>
      </PageWrapper>
    </NavigationsPage>
  )
}

export default MyAccountPage
