import { history } from "umi";
import image from "./assets/403.png";
import styles from "./index.less";

const Exception = () => {
  return (
    <div className={styles.exception}>
      <img src={image} className={styles.img} />
      <div className={styles.main}>
        <div className={styles.title}>暂无权限</div>
        <div className={styles.description}>请联系管理员授权</div>
        <div className={styles.opts}>
          <div className={styles.opt} onClick={() => history.push("/")}>
            返回首页
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
