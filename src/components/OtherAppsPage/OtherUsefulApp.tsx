import React from "react";
import styles from "./OtherUsefulApp.module.css";

interface OtherUsefulAppCardProps {
  name: string;
  description: string;
  children: React.ReactNode;
  appLink: string;
}

const OtherUsefulAppCard: React.FC<OtherUsefulAppCardProps> = ({
  name,
  description,
  children,
  appLink,
}) => {
  return (
    <div className={styles.usefulAppCardWrapper}>
      <div className={styles.iconWrapper}>{children}</div>
      <div className="flex flex-col justify-between">
        <div>
          <h4 className={styles.appName}>{name}</h4>
          <p className={styles.appDescription}>{description}</p>
        </div>
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.appLinkButton}>OPEN APPLICATION</button>
        </a>
      </div>
    </div>
  );
};

export default OtherUsefulAppCard;
