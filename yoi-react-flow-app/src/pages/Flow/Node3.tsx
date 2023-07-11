import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(() => {
  return (
    <>
      <div
        style={{
          border: "1px solid #666",
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        9
      </div>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        style={{ background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ background: "#555" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ background: "#555" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="d"
        style={{ background: "#555" }}
      />
    </>
  );
});
