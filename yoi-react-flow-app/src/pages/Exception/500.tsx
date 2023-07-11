import { history } from "@umijs/max";
import { useCallback, useEffect } from "react";
import image from "./assets/500.png";
import styles from "./index.less";

const Exception = () => {
  const onClick = useCallback(() => {
    history.back();
  }, []);
  useEffect(() => {
    const handler = () => {
      window.location.reload();
    };
    window.addEventListener("hashchange", handler);
    return () => {
      window.removeEventListener("hashchange", handler);
    };
  });
  return (
    <div className={styles.exception}>
      <img src={image} className={styles.img} />
      <div className={styles.main}>
        <div className={styles.title}>服务器异常</div>
        <div className={styles.description}>服务器出错了，请稍后：</div>
        <div className={styles.opts}>
          <div className={styles.opt} onClick={onClick}>
            刷新一下
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
