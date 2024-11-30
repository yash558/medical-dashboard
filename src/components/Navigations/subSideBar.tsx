import React from "react";
import { Link } from "react-router-dom";
import styles from "./SubSideBar.module.css";
import EyeIcon from "@assets/icons/Eye";

interface SubSideBarProps {
  items: Array<{ route: string; label: string }>;
  closeSubSidebar: () => void;
}

const SubSideBar: React.FC<SubSideBarProps> = ({ items, closeSubSidebar }) => {
  return (
    <div className={styles.subSideBarWrapper}>
      <div className="flex flex-col items-start justify-start  z-10 gap-4 p-6">
        {items.map((item) => (
          <Link
            key={item.route}
            to={item.route}
            className="text-[--primary-blue] flex items-center gap-4"
          >
            <EyeIcon height={30} width={30} />
            <span className="text-lg text-[#475467]">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubSideBar;
