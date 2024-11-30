// components
import { Navbar } from "@components/Common";
import Footer from "@components/ViewPatientPage/PrescribedExercisesTable/Footer";
// helpers
import { cn } from "src/utils/common.helper";

const DefaultLayout = (props: {
  children: React.ReactNode
  layoutClassName?: string
  wrapperClassName?: string
  contentClassName?: string
  hideFooter?: boolean
}) => {
  const {
    children,
    layoutClassName = "",
    wrapperClassName = "",
    contentClassName = "",
    hideFooter = false,
  } = props;

  return (
    <div
      className={cn(
        "flex flex-col justify-between relative min-h-svh w-full md:bg-[var(--pure-white)] bg-[#f5f5f5] overflow-hidden",
        layoutClassName
      )}
    >
      <div
        className={cn(
          "flex flex-col flex-grow overflow-hidden",
          wrapperClassName
        )}
      >
        <Navbar />
        <div
          className={cn(
            "flex flex-col gap-5 lg:gap-6 3xl:gap-16 overflow-hidden flex-grow w-full",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;
