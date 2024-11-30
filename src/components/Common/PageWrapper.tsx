import styles from "./PageWrapper.module.css";

const PageWrapper: React.FC<{ className: string, children: React.ReactNode }> = ({ className, children }) => {
      return (
            <div className={styles.pageWrapper + " " + className}>
                  {children}
            </div>
      );
};

export default PageWrapper;
