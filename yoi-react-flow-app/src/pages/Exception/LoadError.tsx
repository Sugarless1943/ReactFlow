import { history } from "@umijs/max";
import { useCallback, useEffect } from "react";
import image from "./assets/load-error.png";
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
        <div className={styles.title}>页面错误</div>
        <div className={styles.description}>页面加载出错</div>
        <div className={styles.opts}>
          <div className={styles.opt} onClick={onClick}>
            重新加载
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
