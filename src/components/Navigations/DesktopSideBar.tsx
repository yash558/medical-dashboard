import styles from "./DesktopSideBar.module.css";
import SideBarItem from "@components/Common/SideBarItem";
import ProfileIcon from "../../assets/icons/pic.svg";
import ModalPopup from "@components/permissionModal/permissionModal";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import SubSideBar from "./subSideBar";

const DesktopSideBar: React.FC = () => {
  const { ownDetails } = useSelector((state: any) => state.profile);
  const { firstName } = ownDetails?.details || {};
  const [isSubSidebarVisible, setSubSidebarVisible] = useState<boolean>(false); // Track visibility
  const [subSidebarItems, setSubSidebarItems] = useState<Array<{ route: string; label: string }>>([]); // Store sub-items dynamically
  const subSidebarRef = useRef<HTMLDivElement>(null); // Ref for SubSideBar

  const handleSubSidebar = (items: Array<{ route: string; label: string }>) => {
    setSubSidebarVisible(true);
    setSubSidebarItems(items);
  };

  const closeSubSidebar = () => {
    setSubSidebarVisible(false);
    setSubSidebarItems([]);
  };

  useEffect(() => {
    // Close the sidebar if clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subSidebarRef.current &&
        !subSidebarRef.current.contains(event.target as Node)
      ) {
        closeSubSidebar();
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.sideBarWrapper + " " + "md:flex hidden px-4"}>
      <div className={styles.sideBarSection}>
        {/* Profile Section */}
        <div className="flex flex-row items-center justify-center gap-6 text-center border-b border-[#C4E2FF] pb-4">
          <img
            src={ProfileIcon} // Replace with actual avatar path
            alt="Profile"
            className="w-12 h-12 rounded-full mb-2"
          />
          <div className="flex flex-col items-start ">
            <div className="font-semibold leading-4 text-sm text-[--text-gray]">
              VISION SPECIALIST
            </div>
            <div className="text-[--primary-blue] text-sm font-medium">
              Dr {firstName || "Dan Lewy"}
            </div>
          </div>
        </div>

        <div className={"flex flex-col gap-2 mt-4"}>
          <SideBarItem
            linkClassName={styles.sideBarItem}
            showText={true}
            route="/dashboard"
            linkActiveClassName={styles.linkActive}
          />

          <SideBarItem
            linkClassName={styles.sideBarItem}
            showText={true}
            route="/my-account"
            linkActiveClassName={styles.linkActive}
          />
          <div className="border-t border-[#C4E2FF] my-2"></div>

          <div className="flex flex-col border-b border-[#C4E2FF]">
            <div className="text-xs font-bold text-[--text-gray] tracking-widest px-4 uppercase mb-2">
              Charts
            </div>
            <SideBarItem
              linkClassName={styles.sideBarItem}
              showText={true}
              route="/vision-therapy"
              linkActiveClassName={styles.linkActive}
            />
            <SideBarItem
              linkClassName={styles.sideBarItem}
              showText={true}
              route="/contrast-sensitivity"
              linkActiveClassName={styles.linkActive}
              onClick={() =>
                handleSubSidebar([
                  { route: "/chart1", label: "Chart Name" },
                  { route: "/chart2", label: "Chart Name" },
                  { route: "/chart3", label: "Chart Name" },
                ])
              }
            />

            <SideBarItem
              linkClassName={styles.sideBarItem}
              showText={true}
              route="/color-sensitivity"
              linkActiveClassName={styles.linkActive}
            />

            <SideBarItem
              linkClassName={styles.sideBarItem}
              showText={true}
              route="/visual-acuity"
              linkActiveClassName={styles.linkActive}
            />
            <SideBarItem
              linkClassName={styles.sideBarItem}
              showText={true}
              route="/color-vision"
              linkActiveClassName={styles.linkActive}
            />
            <SideBarItem
              linkClassName={styles.sideBarItem}
              showText={true}
              route="/pdf-viewer"
              linkActiveClassName={styles.linkActive}
            />
          </div>
          <SideBarItem
            linkClassName={styles.sideBarItem}
            showText={true}
            route="/tests"
            linkActiveClassName={styles.linkActive}
          />

          <ModalPopup />

          <div className="border-t border-[#C4E2FF] my-2"></div>

          <SideBarItem
            linkClassName={styles.sideBarItem}
            showText={true}
            route="/other-apps"
            linkActiveClassName={styles.linkActive}
          />

          {/* Floating SubSidebar */}
          {isSubSidebarVisible && (
            <div ref={subSidebarRef}>
              <SubSideBar
                items={subSidebarItems}
                closeSubSidebar={closeSubSidebar}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopSideBar;
