import image from "./assets/image.png";
import styles from "./index.less";

const DataError = () => {
  return (
    <div className={styles.dataError}>
      <img src={image} className={styles.img} />
      <span className={styles.description}>数据加载错误</span>
    </div>
  );
};

export default DataError;
