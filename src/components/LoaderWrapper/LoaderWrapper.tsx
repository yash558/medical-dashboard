import {Loader} from '../Loader/Loader';
import styles from './LoaderWrapper.module.css';

const LoaderWrapper = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <Loader />
    </div>
  );
};

export default LoaderWrapper;
