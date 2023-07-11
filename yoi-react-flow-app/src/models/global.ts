// 全局共享数据示例
import { useState } from "react";

const useUser = () => {
  const [name, setName] = useState<string>("优也前端脚手架");
  return {
    name,
    setName,
  };
};

export default useUser;
