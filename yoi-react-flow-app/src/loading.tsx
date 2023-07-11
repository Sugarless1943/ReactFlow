import loadingImg from "@/assets/loading.png";
import styles from "./global.less";

const PageLoading = () => {
  return (
    <div className={styles.pageLoading}>
      <img className={styles.img} src={loadingImg} width={100} />
      <div className={styles.text}>页面加载中...</div>
    </div>
  );
};

export default PageLoading;
