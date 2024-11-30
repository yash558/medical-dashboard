import styles from "./CurrentSelectedIconWrapper.module.css";

const currentSelectedIconWrapper = ({ children }) => {
      return (
            <div className={styles.currentSelectedIconWrapper}>{children}</div>
      );
};

export default currentSelectedIconWrapper;
