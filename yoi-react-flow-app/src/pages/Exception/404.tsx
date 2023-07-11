import { history } from "umi";
import image from "./assets/404.png";
import styles from "./index.less";

const Exception = () => {
  return (
    <div className={styles.exception}>
      <img src={image} className={styles.img} />
      <div className={styles.main}>
        <div className={styles.title}>无法访问页面</div>
        <div className={styles.description}>
          抱歉，找不到您要搜索的页面，可能不存在或已被删除，您可以访问以下链接获取信息：
        </div>
        <div className={styles.opts}>
          <div className={styles.opt} onClick={() => history.push("/")}>
            返回首页
          </div>
          <div className={styles.opt}>查看路由文档</div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
