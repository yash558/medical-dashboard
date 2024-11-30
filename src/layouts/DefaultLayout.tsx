import styles from "./DefaultLayout.module.css";
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.pageLayout} onContextMenu={(e) => e.preventDefault()}>
      {children}
    </div>
  );
};

export default DefaultLayout;
